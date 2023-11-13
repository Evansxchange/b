// Update language link
window.languageLink = function (element) {
    var urlLang = window.location.pathname.split("/")[1];

    var isMultibank = !["mexjituan.com", "dt1cn.com", "dtgroupcn.com"].includes(location.host) && !["multibank.iq"].includes(location.host);
    var isMexchina = ["mexjituan.com", "dt1cn.com", "dtgroupcn.com"].includes(location.host);
    var isIraq = ["multibank.iq"].includes(location.host);

    var isMultibankEnglish = isMultibank && document.documentElement.lang === "en" && !["en", "eu", "english"].includes(urlLang);
    var isMexchinaChinies = isMexchina && document.documentElement.lang === "zh-CN";
    var isIraqArabic = isIraq && document.documentElement.lang === "ar";
    
    var language = element.dataset.href;
    if ((language === "/en" && isMultibank) || (language === "/zh" &&  isMexchina) || (language === "/ar" && isIraqArabic)) {
        language = "";
    }
    if (isMultibankEnglish || isMexchinaChinies || (isIraqArabic && language !== '/en')) {
        element.href = language + window.location.pathname + window.location.search + window.location.hash;
    } else {
        element.href = (window.location.pathname.replace(/^\/?([^\/]*)/, language) || "/") + window.location.search + window.location.hash;
    }
}

var jqueryValidatorTranslations = {
    es: {
        required: "Este campo es requerido.",
    },
    ru: {
        required: "Это поле обязательно к заполнению.",
    },
    ar: {
        required: "هذا الحقل مطلوب",
    },
    vi: {
        required: "Trường này là bắt buộc.",
    },
    ms: {
        required: "Medan ini diperlukan.",
    },
    fr: {
        required: "Ce champ est requis.",
    },
    pt: {
        required: "Este campo é obrigatório.",
    },
    it: {
        required: "Questo campo è obbligatorio.",
    },
    id: {
        required: "Bagian ini diperlukan.",
    },
    "zh-TW": {
        required: "這是必填欄。",
    },
    "zh-CN": {
        required: "这是必填栏。",
    },
    "th": {
        required:"ต้องระบุฟิลด์นี้"
    }
}


jQuery.extend(jQuery.validator.messages, jqueryValidatorTranslations[document.documentElement.lang]);


// check if mobile device
window.isMobile = false;
(a => {
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
    window.isMobile = true;
})(navigator.userAgent||navigator.vendor||window.opera);


// Jquery validation
(function ($) {
  $.fn.inputFilter = function (inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  };
}(jQuery));

$.validator.addMethod("phone",
  function (value, element) {
    return this.optional(element) || window.intlTelInputGlobals.getInstance(element).isValidNumber();
  },
  (value, element) => element.dataset.extraMessage
);

$.validator.addMethod("regex",
  function (value, element, pattern) {
    return this.optional(element) || new RegExp(pattern).test(value);
  },
  (value, element) => element.dataset.extraMessage
);

// MBFX Form
const mbfxForm = (formEl, {disabledPhoneVerification = false, onLoad, onLoadDone}) => {
  const form = typeof formEl === "string" ? document.getElementById(formEl) : formEl;

  const phoneDisplayInput = form.querySelector("input[name=phone_display]");
  if (phoneDisplayInput) {
    const countryName = form.querySelector("select[name=country_name]");
    const countryCode = form.querySelector("input[name=country_code]");
    const phoneInput = form.querySelector("input[name=phone]");
    $(phoneDisplayInput).inputFilter(value => /^[0-9]*$/.test(value));
    const itiCountryCode = (() => {
      let countryCode = document.querySelector("meta[name=c_code]").content;
      if (countryCode === "DE") return "GB";
      return countryCode;
    })().toLowerCase();
    const withoutFlags = ["fr", "es"].includes(itiCountryCode);
    intlTelInput(phoneDisplayInput, {
      separateDialCode: !withoutFlags,
      nationalMode: withoutFlags,
      initialCountry: "auto",
      geoIpLookup: e => e(itiCountryCode),
      utilsScript: "/public_files/static_js/utils.js",
      preferredCountries: []
    });
    const countryData = window.intlTelInputGlobals.getCountryData().find(item => item.iso2 === itiCountryCode);
    if (countryData) {
      countryName.value = countryData.iso2?.toUpperCase() || "";
      countryCode.value = countryData.dialCode ? `+${countryData?.dialCode}` : "";
    }
    phoneDisplayInput.addEventListener("countrychange", e => {
      const countryData = window.intlTelInputGlobals.getInstance(e.currentTarget).getSelectedCountryData();
      countryName.value = countryData.iso2?.toUpperCase() || "";
      countryCode.value = countryData.dialCode ? `+${countryData?.dialCode}` : "";
    });
    phoneDisplayInput.addEventListener("input", () => {
    });
    phoneDisplayInput.addEventListener("change", () => {
      phoneInput.value = phoneDisplayInput.value.replace(countryCode.value, "");
    });
    if (disabledPhoneVerification) {
      form.querySelector(".sms_verif_code").value = "345434";
      form.querySelectorAll(".send-code-container, .sms-code-container").forEach(el => {
        el.style.display = "none";
      });
    }
  }

  $(form).validate({
    rules: Array.from(form.elements).reduce((acc, curr) => {
      acc[curr.name] = {
        required: curr.required,
        equalTo: curr.name === "confirm_email" && form.querySelector("input[name=email]"),
        regex: curr.dataset.regex
      };
      return acc;
    }, {}),
    messages: Array.from(form.elements).reduce((acc, curr) => {
      acc[curr.name] = {
        required: curr.dataset.message,
        equalTo: curr.dataset.extraMessage
      };
      return acc;
    }, {}),
    errorPlacement: (error, element) => {
      if (element.attr("name") === "phone_display") {
        return element.parent(".iti").parent().append(error);
      }
      element.parent().append(error);
    },
    submitHandler: form => {
      typeof onLoad === "function" && onLoad();
      form.submit();
    }
  });
};
