AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/sign',
    template: 'sign',
    //layoutTemplate: 'myLayout',
    //redirect: '/user-profile',
});
AccountsTemplates.configureRoute('resetPwd', {
    name: 'atResetPwd',
});
AccountsTemplates.configureRoute('forgotPwd', {
    name: 'atForgotPwd',
});


AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    negativeFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: '/faqs',
    //termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    // Hooks
    //onLogoutHook: myLogoutFunc,
    //onSubmitHook: mySubmitFunc,

    // Texts
    texts: {
        navSignIn: "signIn",
        navSignOut: "signOut",
        optionalField: "optional",
        pwdLink_pre: "",
        pwdLink_link: "forgotPassword",
        pwdLink_suff: "",
        //resendVerificationEmailLink_pre: "Verification email lost?",
        //resendVerificationEmailLink_link: "Send again",
        //resendVerificationEmailLink_suff: "",
        sep: "OR",
        signInLink_pre: "ifYouAlreadyHaveAnAccount",
        signInLink_link: "signin",
        signInLink_suff: "",
        signUpLink_pre: "dontHaveAnAccount",
        signUpLink_link: "signUp",
        signUpLink_suff: "",

        socialAdd: "add",
        socialConfigure: "configure",
        socialRemove: "remove",
        socialSignIn: "signIn",
        socialSignUp: "signUp",
        socialWith: "with",
        socialIcons: {
          google: "myGoogleIcon",
          "meteor-developer": "myMeteorIcon",
        },

        termsPreamble: "clickAgree",
        termsPrivacy: "privacyPolicy",
        termsAnd: "and",
        termsTerms: "terms",

        button: {
          changePwd: "Password Text",
          enrollAccount: "Enroll Text",
          forgotPwd: "Send Message",
          resetPwd: "Reset Password",
          signIn: "Sign In",
          signUp: "Cheers!",
        },
        
        title: {
            signIn: "Sign In",
            signUp: "Join the OpenCAS",
            forgotPwd: "Forgot Password ?",

            changePwd: "Password Title",
            enrollAccount: "Enroll Title",
            resetPwd: "Reset Pwd Title",
            verifyEmail: "Verify Email Title",
        },
        info: {
            emailSent: "info.emailSent",
            emailVerified: "info.emailVerified",
            pwdChanged: "info.passwordChanged",
            pwdReset: "info.passwordReset",
            pwdSet: "info.passwordReset",
            signUpVerifyEmail: "Successful Registration! Please check your email and follow the instructions.",
            verificationEmailSent: "A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.",
        },
        errors: {
            accountsCreationDisabled: "Client side accounts creation is disabled!!!",
            cannotRemoveService: "Cannot remove the only active service!",
            captchaVerification: "Captcha verification failed!",
            loginForbidden: "error.accounts.Login forbidden",
            mustBeLoggedIn: "error.accounts.Must be logged in",
            pwdMismatch: "error.pwdsDontMatch",
            validationErrors: "Validation Errors",
            verifyEmailFirst: "Please verify your email first. Check the email and follow the link!",
        },
        inputIcons: {
          isValidating: "fa fa-spinner fa-spin",
          hasSuccess: "fa fa-check",
          hasError: "fa fa-times",
        }
    }
});



 //   current_password
 //   email
 //   password
 //   password_again
 //   username
 //   username_and_email

//=======================================================
//AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "Realname",
      placeholder: "Realname",
      required: true,
      maxLength: 10,
  },
  {
      _id:"institution",
      type: "text",
      displayName: "Institution",
      required: true,
      maxLength: 10,
  },
  {
      _id:"research",
      type: "text",
      displayName: "Research",
      required: false,
      maxLength: 20,
  }
]);


/*
AccountsTemplates.addField({
    _id: "gender",
    type: "select",
    displayName: "Gender",
    select: [
        {
            text: "Male",
            value: "male",
        },
        {
            text: "Female",
            value: "female",
        },
    ],
});

AccountsTemplates.addField({
    _id: "fruit",
    type: "radio",
    displayName: "Preferred Fruit",
    select: [
        {
        text: "Apple",
        value: "aa",
      }, {
        text: "Banana",
        value: "bb",
      }, {
        text: "Carrot",
        value: "cc",
      },
    ],
});

AccountsTemplates.addField({
    _id: "mailing_list",
    type: "checkbox",
    displayName: "Subscribe me to mailing List",
});

AccountsTemplates.addField({
    _id: 'reg_code',
    type: 'hidden'
});
*/


