// validation.ts
export interface SignupData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface LoginErrors {
    email?: string;
    password?: string;
}


export interface ValidationErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

export function validateSignup(data: SignupData): ValidationErrors {
    const errors: ValidationErrors = {};

    // First Name validation
    if (!data.firstName.trim()) {
        errors.firstName = "First name is required";
    }

    // Last Name validation
    if (!data.lastName.trim()) {
        errors.lastName = "Last name is required";
    }

    // Email validation (simple regex)
    if (!data.email.trim()) {
        errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
        errors.email = "Enter a valid email";
    }

    // Password validation
    if (!data.password) {
        errors.password = "Password is required";
    } else if (data.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(data.password)) {
        errors.password = "Password must contain at least one uppercase letter";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
        errors.password = "Password must contain at least one special character";
    }

    // Confirm password validation
    if (!data.confirmPassword) {
        errors.confirmPassword = "Please confirm your password";
    } else if (data.password !== data.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
}

export function validateLogin(data: LoginData): ValidationErrors {
    const errors: ValidationErrors = {};

    if (!data.email.trim()) {
        errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
        errors.email = "Enter a valid email";
    }

    if (!data.password) {
        errors.password = "Password is required";
    } else if (data.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(data.password)) {
        errors.password = "Password must contain at least one uppercase letter";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
        errors.password = "Password must contain at least one special character";
    }

    return errors;
}

