import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import "./Form.scss";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
      custom: {
        borderColor: "#f5f5f5",
        borderHoverColor: "#e0e7ff",
        borderFocusedColor: "#e0e7ff",
        textColorLight: "#ebebeb",
        textColorDark: "#0b0b1d",
        buttonBackgroundColor: "#0b0b1d",
        buttonColor: "#fff",
      },
      error: {
        main: "#e15b5b",
        dark: "#ff1e8c",
      },
      focus: {
        yellow: "#f2d377",
        blue: "#4d9de0",
      },
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: ({ theme }) => ({
            fontFamily: "Noto Sans KR",
            color: theme.palette.custom.textColorLight,
          }),
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: ({ theme }) => ({
            "& label": {
              fontFamily: "Noto Sans KR",
              color: theme.palette.custom.borderColor,
            },
            "& label.Mui-focused": {
              color: theme.palette.custom.borderFocusedColor,
            },
            "& label.Mui-error": {
              color: theme.palette.error.dark,
            },
            "& label.Mui-focused.Mui-error": {
              color: theme.palette.error.dark,
            },
          }),
        },
      },
      MuiInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            "&::before": {
              borderBottom: `1px solid ${theme.palette.custom.borderColor}`,
            },
            "&:hover:not(.Mui-disabled, .Mui-error)::before": {
              borderBottom: `1px solid ${theme.palette.custom.borderHoverColor}`,
            },
            "&.Mui-focused::after": {
              borderBottom: `1px solid ${theme.palette.custom.borderFocusedColor}`,
            },
            "&.Mui-error::before": {
              borderBottom: `1px solid ${theme.palette.error.dark}`,
            },
            "&.Mui-error::after": {
              borderBottom: `1px solid ${theme.palette.error.dark}`,
            },
            "&.Mui-error:hover:not(.Mui-disabled)::before": {
              borderBottom: `1px solid ${theme.palette.error.dark}`,
            },
          }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: "20px",
            fontFamily: "Noto Sans KR",
            fontWeight: 600,
            fontSize: "16px",
            "&.loading": {
              pointerEvents: "none",
              opacity: 0.8,
            },
          }),
          contained: ({ theme }) => ({
            backgroundColor: theme.palette.custom.buttonBackgroundColor,
            color: theme.palette.custom.buttonColor,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            "&:hover": {
              backgroundColor: theme.palette.focus.blue,
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            },
            "&:disabled": {
              backgroundColor: "#444",
              color: "#999",
              boxShadow: "none",
            },
          }),
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: ({ theme }) => ({
            fontFamily: "Noto Sans KR",
            fontSize: "14px",
          }),
          filledSuccess: ({ theme }) => ({
            backgroundColor: theme.palette.focus.blue,
            "& .MuiAlert-icon": {
              padding: "9px 0",
              color: theme.palette.custom.buttonColor,
            },
            "& .MuiAlert-message": {
              color: theme.palette.custom.buttonColor,
            },
            "& .MuiAlert-action": {
              padding: "6px 0 0 16px",
              color: "#20425e",
            },
          }),
          filledError: ({ theme }) => ({
            backgroundColor: theme.palette.error.dark,
            "& .MuiAlert-icon": {
              padding: "9px 0",
              color: theme.palette.custom.buttonColor,
            },
            "& .MuiAlert-message": {
              color: theme.palette.custom.buttonColor,
            },
            "& .MuiAlert-action": {
              padding: "6px 0 0 16px",
              color: "#5b0b32",
            },
          }),
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: ({ theme }) => ({
            marginTop: "4px",
            fontFamily: "Noto Sans KR",
            fontSize: "12px",
            color: theme.palette.error.dark,
            "&.Mui-error": {
              color: theme.palette.error.dark,
            },
            // 일반 helper text (글자수 카운터 등)
            "&:not(.Mui-error)": {
              fontSize: "12px",
              color: "#999",
              textAlign: "right",
            },
          }),
        },
      },
    },
  });

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "", // 'success', 'error'
  });
  // Validation 상태 관리
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  // validation check 함수들
  const validateName = (name) => {
    if (!name.trim()) {
      return "이름을 입력해주세요.";
    }
    return "";
  };
  const validateEmail = (email) => {
    if (!email.trim()) {
      return "이메일을 입력해주세요.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "유효한 이메일 주소를 입력해주세요.";
    }
    return "";
  };
  const validateMessage = (message) => {
    if (!message.trim()) {
      return "메시지를 입력해주세요.";
    }
    if (message.trim().length > 1000) {
      return "메세지는 1000자를 초과할 수 없습니다.";
    }
    return "";
  };

  // input 값 변경 핸들러
  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    // 실시간 validation check
    let error = "";
    switch (field) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  // form 전체 validation check
  const validateForm = () => {
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError,
    });

    return !nameError && !emailError && !messageError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation check
    if (!validateForm()) {
      setSnackbar({
        open: true,
        message: "입력 정보를 확인해주세요.",
        severity: "error",
      });
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm("service_ascwrk7", "template_hdhlukh", form.current, {
        publicKey: "flYKELUB2mHkRKcfq",
      })
      .then((res) => {
        if (res.status === 200) {
          setSnackbar({
            open: true,
            message: "발사 성공 🚀",
            severity: "success",
          });

          form.current.reset(); // form 초기화
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setErrors({
            name: "",
            email: "",
            message: "",
          });

          console.log("OK!", res);
        } else {
          setSnackbar({
            open: true,
            message: `문제가 생겼어요!: ${res.status}`,
            severity: "error",
          });

          console.log("FAILED...", res);
        }
      })
      .catch((err) => {
        setSnackbar({
          open: true,
          message: "네트워크 에러!",
          severity: "error",
        });

        console.log("FAILED...", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  // input custom theme
  const outerTheme = useTheme();

  // form 유효성 체크 (버튼 활성화 조건)
  const isFormValid =
    !errors.name &&
    !errors.email &&
    !errors.message &&
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim();

  return (
    <div className="contact-form">
      <ThemeProvider theme={customTheme(outerTheme)}>
        <form ref={form} onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <TextField
              type="text"
              name="name"
              label="이름"
              className="input input-name"
              variant="standard"
              value={formData.name}
              onChange={handleInputChange("name")}
              error={!!errors.name}
              helperText={errors.name}
              disabled={isLoading}
              required
            />
            <TextField
              type="email"
              label="Email"
              name="email"
              className="input input-email"
              variant="standard"
              value={formData.email}
              onChange={handleInputChange("email")}
              error={!!errors.email}
              helperText={errors.email}
              disabled={isLoading}
              required
            />
          </div>

          <div className="form-group">
            <TextField
              label="Message"
              name="message"
              className="input input-message"
              variant="standard"
              multiline
              rows={10}
              value={formData.message}
              onChange={handleInputChange("message")}
              error={!!errors.message}
              helperText={errors.message || `${formData.message.length}/1000`}
              disabled={isLoading}
              required
            />
          </div>

          <Button
            variant="contained"
            type="submit"
            size="large"
            disabled={!isFormValid || isLoading}
            className={`btn-submit ${isLoading ? "loading" : ""}`}
          >
            {isLoading ? "송신 중...🚀" : "보내기"}
          </Button>
        </form>

        {/* 상태 메시지 표시 */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            severity={snackbar.severity}
            variant="filled"
            onClose={handleCloseSnackbar}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </div>
  );
};

export default Form;
