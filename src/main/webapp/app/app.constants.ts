// These constants are injected via webpack DefinePlugin variables.
// You can add more variables in webpack.common.js or in profile specific webpack.<dev|prod>.js files.
// If you change the values in the webpack config files, you need to re run webpack to update the application

declare const __DEBUG_INFO_ENABLED__: boolean;
declare const __VERSION__: string;

export const VERSION = __VERSION__;
export const DEBUG_INFO_ENABLED = __DEBUG_INFO_ENABLED__;
export const HOT_BASE = 'https://www.tikievents.net/admin/api';

export const COUNTRY_CODE = [
  {
    "name": "Afghanistan",
    "code": "AF",
    "emoji": "🇦🇫",
    "unicode": "U+1F1E6 U+1F1EB",
    "dialCode": "+93",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AF.svg"
  },
  {
    "name": "Albania",
    "code": "AL",
    "emoji": "🇦🇱",
    "unicode": "U+1F1E6 U+1F1F1",
    "dialCode": "+355",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AL.svg"
  },
  {
    "name": "Andorra",
    "code": "AD",
    "emoji": "🇦🇩",
    "unicode": "U+1F1E6 U+1F1E9",
    "dialCode": "+376",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AD.svg"
  },
  {
    "name": "Angola",
    "code": "AO",
    "emoji": "🇦🇴",
    "unicode": "U+1F1E6 U+1F1F4",
    "dialCode": "+244",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AO.svg"
  },
  {
    "name": "Anguilla",
    "code": "AI",
    "emoji": "🇦🇮",
    "unicode": "U+1F1E6 U+1F1EE",
    "dialCode": "+1264",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AI.svg"
  },
  {
    "name": "Antarctica",
    "code": "AQ",
    "emoji": "🇦🇶",
    "unicode": "U+1F1E6 U+1F1F6",
    "dialCode": "+672",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AQ.svg"
  },
  {
    "name": "Antigua & Barbuda",
    "code": "AG",
    "emoji": "🇦🇬",
    "unicode": "U+1F1E6 U+1F1EC",
    "dialCode": "+1268",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AG.svg"
  },
  {
    "name": "Argentina",
    "code": "AR",
    "emoji": "🇦🇷",
    "unicode": "U+1F1E6 U+1F1F7",
    "dialCode": "+54",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AR.svg"
  },
  {
    "name": "Armenia",
    "code": "AM",
    "emoji": "🇦🇲",
    "unicode": "U+1F1E6 U+1F1F2",
    "dialCode": "+374",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AM.svg"
  },
  {
    "name": "Aruba",
    "code": "AW",
    "emoji": "🇦🇼",
    "unicode": "U+1F1E6 U+1F1FC",
    "dialCode": "+297",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AW.svg"
  },
  {
    "name": "Ascension Island",
    "code": "AC",
    "emoji": "🇦🇨",
    "unicode": "U+1F1E6 U+1F1E8",
    "dialCode": "+247",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AC.svg"
  },
  {
    "name": "Australia",
    "code": "AU",
    "emoji": "🇦🇺",
    "unicode": "U+1F1E6 U+1F1FA",
    "dialCode": "+61",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AU.svg"
  },
  {
    "name": "Austria",
    "code": "AT",
    "emoji": "🇦🇹",
    "unicode": "U+1F1E6 U+1F1F9",
    "dialCode": "+43",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AT.svg"
  },
  {
    "name": "Azerbaijan",
    "code": "AZ",
    "emoji": "🇦🇿",
    "unicode": "U+1F1E6 U+1F1FF",
    "dialCode": "+994",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AZ.svg"
  },
  {
    "name": "Bahamas",
    "code": "BS",
    "emoji": "🇧🇸",
    "unicode": "U+1F1E7 U+1F1F8",
    "dialCode": "+1242",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BS.svg"
  },
  {
    "name": "Bahrain",
    "code": "BH",
    "emoji": "🇧🇭",
    "unicode": "U+1F1E7 U+1F1ED",
    "dialCode": "+973",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BH.svg"
  },
  {
    "name": "Bangladesh",
    "code": "BD",
    "emoji": "🇧🇩",
    "unicode": "U+1F1E7 U+1F1E9",
    "dialCode": "+880",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg"
  },
  {
    "name": "Barbados",
    "code": "BB",
    "emoji": "🇧🇧",
    "unicode": "U+1F1E7 U+1F1E7",
    "dialCode": "+1246",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BB.svg"
  },
  {
    "name": "Belarus",
    "code": "BY",
    "emoji": "🇧🇾",
    "unicode": "U+1F1E7 U+1F1FE",
    "dialCode": "+375",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BY.svg"
  },
  {
    "name": "Belgium",
    "code": "BE",
    "emoji": "🇧🇪",
    "unicode": "U+1F1E7 U+1F1EA",
    "dialCode": "+32",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BE.svg"
  },
  {
    "name": "Belize",
    "code": "BZ",
    "emoji": "🇧🇿",
    "unicode": "U+1F1E7 U+1F1FF",
    "dialCode": "+501",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BZ.svg"
  },
  {
    "name": "Benin",
    "code": "BJ",
    "emoji": "🇧🇯",
    "unicode": "U+1F1E7 U+1F1EF",
    "dialCode": "+229",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BJ.svg"
  },
  {
    "name": "Bermuda",
    "code": "BM",
    "emoji": "🇧🇲",
    "unicode": "U+1F1E7 U+1F1F2",
    "dialCode": "+1441",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BM.svg"
  },
  {
    "name": "Bhutan",
    "code": "BT",
    "emoji": "🇧🇹",
    "unicode": "U+1F1E7 U+1F1F9",
    "dialCode": "+975",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BT.svg"
  },
  {
    "name": "Bolivia",
    "code": "BO",
    "emoji": "🇧🇴",
    "unicode": "U+1F1E7 U+1F1F4",
    "dialCode": "+591",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BO.svg"
  },
  {
    "name": "Bosnia & Herzegovina",
    "code": "BA",
    "emoji": "🇧🇦",
    "unicode": "U+1F1E7 U+1F1E6",
    "dialCode": "+387",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BA.svg"
  },
  {
    "name": "Botswana",
    "code": "BW",
    "emoji": "🇧🇼",
    "unicode": "U+1F1E7 U+1F1FC",
    "dialCode": "+267",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BW.svg"
  },
  {
    "name": "Brazil",
    "code": "BR",
    "emoji": "🇧🇷",
    "unicode": "U+1F1E7 U+1F1F7",
    "dialCode": "+55",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BR.svg"
  },
  {
    "name": "Brunei",
    "code": "BN",
    "emoji": "🇧🇳",
    "unicode": "U+1F1E7 U+1F1F3",
    "dialCode": "+673",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BN.svg"
  },
  {
    "name": "Bulgaria",
    "code": "BG",
    "emoji": "🇧🇬",
    "unicode": "U+1F1E7 U+1F1EC",
    "dialCode": "+359",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BG.svg"
  },
  {
    "name": "Burkina Faso",
    "code": "BF",
    "emoji": "🇧🇫",
    "unicode": "U+1F1E7 U+1F1EB",
    "dialCode": "+226",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BF.svg"
  },
  {
    "name": "Burundi",
    "code": "BI",
    "emoji": "🇧🇮",
    "unicode": "U+1F1E7 U+1F1EE",
    "dialCode": "+257",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BI.svg"
  },
  {
    "name": "Cabo Verde",
    "code": "CV",
    "emoji": "🇨🇻",
    "unicode": "U+1F1E8 U+1F1FB",
    "dialCode": "+238",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CV.svg"
  },
  {
    "name": "Cambodia",
    "code": "KH",
    "emoji": "🇰🇭",
    "unicode": "U+1F1F0 U+1F1ED",
    "dialCode": "+855",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KH.svg"
  },
  {
    "name": "Cameroon",
    "code": "CM",
    "emoji": "🇨🇲",
    "unicode": "U+1F1E8 U+1F1F2",
    "dialCode": "+237",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CM.svg"
  },
  {
    "name": "Canada",
    "code": "CA",
    "emoji": "🇨🇦",
    "unicode": "U+1F1E8 U+1F1E6",
    "dialCode": "+1",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CA.svg"
  },
  {
    "name": "Cayman Islands",
    "code": "KY",
    "emoji": "🇰🇾",
    "unicode": "U+1F1F0 U+1F1FE",
    "dialCode": "+1345",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KY.svg"
  },
  {
    "name": "Central African Republic",
    "code": "CF",
    "emoji": "🇨🇫",
    "unicode": "U+1F1E8 U+1F1EB",
    "dialCode": "+236",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CF.svg"
  },
  {
    "name": "Chad",
    "code": "TD",
    "emoji": "🇹🇩",
    "unicode": "U+1F1F9 U+1F1E9",
    "dialCode": "+235",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TD.svg"
  },
  {
    "name": "Chile",
    "code": "CL",
    "emoji": "🇨🇱",
    "unicode": "U+1F1E8 U+1F1F1",
    "dialCode": "+56",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CL.svg"
  },
  {
    "name": "China",
    "code": "CN",
    "emoji": "🇨🇳",
    "unicode": "U+1F1E8 U+1F1F3",
    "dialCode": "+86",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CN.svg"
  },
  {
    "name": "Colombia",
    "code": "CO",
    "emoji": "🇨🇴",
    "unicode": "U+1F1E8 U+1F1F4",
    "dialCode": "+57",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CO.svg"
  },
  {
    "name": "Comoros",
    "code": "KM",
    "emoji": "🇰🇲",
    "unicode": "U+1F1F0 U+1F1F2",
    "dialCode": "+269",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KM.svg"
  },
  {
    "name": "Congo - Brazzaville",
    "code": "CG",
    "emoji": "🇨🇬",
    "unicode": "U+1F1E8 U+1F1EC",
    "dialCode": "+242",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CG.svg"
  },
  {
    "name": "Congo - Kinshasa",
    "code": "CD",
    "emoji": "🇨🇩",
    "unicode": "U+1F1E8 U+1F1E9",
    "dialCode": "+243",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CD.svg"
  },
  {
    "name": "Cook Islands",
    "code": "CK",
    "emoji": "🇨🇰",
    "unicode": "U+1F1E8 U+1F1F0",
    "dialCode": "+682",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CK.svg"
  },
  {
    "name": "Costa Rica",
    "code": "CR",
    "emoji": "🇨🇷",
    "unicode": "U+1F1E8 U+1F1F7",
    "dialCode": "+506",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CR.svg"
  },
  {
    "name": "Croatia",
    "code": "HR",
    "emoji": "🇭🇷",
    "unicode": "U+1F1ED U+1F1F7",
    "dialCode": "+385",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HR.svg"
  },
  {
    "name": "Cuba",
    "code": "CU",
    "emoji": "🇨🇺",
    "unicode": "U+1F1E8 U+1F1FA",
    "dialCode": "+53",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CU.svg"
  },
  {
    "name": "Curaçao",
    "code": "CW",
    "emoji": "🇨🇼",
    "unicode": "U+1F1E8 U+1F1FC",
    "dialCode": "+599",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CW.svg"
  },
  {
    "name": "Cyprus",
    "code": "CY",
    "emoji": "🇨🇾",
    "unicode": "U+1F1E8 U+1F1FE",
    "dialCode": "+357",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CY.svg"
  },
  {
    "name": "Czechia",
    "code": "CZ",
    "emoji": "🇨🇿",
    "unicode": "U+1F1E8 U+1F1FF",
    "dialCode": "+420",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CZ.svg"
  },
  {
    "name": "Côte d’Ivoire",
    "code": "CI",
    "emoji": "🇨🇮",
    "unicode": "U+1F1E8 U+1F1EE",
    "dialCode": "+225",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CI.svg"
  },
  {
    "name": "Denmark",
    "code": "DK",
    "emoji": "🇩🇰",
    "unicode": "U+1F1E9 U+1F1F0",
    "dialCode": "+45",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DK.svg"
  },
  {
    "name": "Djibouti",
    "code": "DJ",
    "emoji": "🇩🇯",
    "unicode": "U+1F1E9 U+1F1EF",
    "dialCode": "+253",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DJ.svg"
  },
  {
    "name": "Dominica",
    "code": "DM",
    "emoji": "🇩🇲",
    "unicode": "U+1F1E9 U+1F1F2",
    "dialCode": "+1767",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DM.svg"
  },
  {
    "name": "Dominican Republic",
    "code": "DO",
    "emoji": "🇩🇴",
    "unicode": "U+1F1E9 U+1F1F4",
    "dialCode": "+1809",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DO.svg"
  },
  {
    "name": "Ecuador",
    "code": "EC",
    "emoji": "🇪🇨",
    "unicode": "U+1F1EA U+1F1E8",
    "dialCode": "+593",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EC.svg"
  },
  {
    "name": "Egypt",
    "code": "EG",
    "emoji": "🇪🇬",
    "unicode": "U+1F1EA U+1F1EC",
    "dialCode": "+20",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EG.svg"
  },
  {
    "name": "El Salvador",
    "code": "SV",
    "emoji": "🇸🇻",
    "unicode": "U+1F1F8 U+1F1FB",
    "dialCode": "+503",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SV.svg"
  },
  {
    "name": "Equatorial Guinea",
    "code": "GQ",
    "emoji": "🇬🇶",
    "unicode": "U+1F1EC U+1F1F6",
    "dialCode": "+240",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GQ.svg"
  },
  {
    "name": "Eritrea",
    "code": "ER",
    "emoji": "🇪🇷",
    "unicode": "U+1F1EA U+1F1F7",
    "dialCode": "+291",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ER.svg"
  },
  {
    "name": "Estonia",
    "code": "EE",
    "emoji": "🇪🇪",
    "unicode": "U+1F1EA U+1F1EA",
    "dialCode": "+372",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EE.svg"
  },
  {
    "name": "Eswatini",
    "code": "SZ",
    "emoji": "🇸🇿",
    "unicode": "U+1F1F8 U+1F1FF",
    "dialCode": "+268",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SZ.svg"
  },
  {
    "name": "Ethiopia",
    "code": "ET",
    "emoji": "🇪🇹",
    "unicode": "U+1F1EA U+1F1F9",
    "dialCode": "+251",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ET.svg"
  },
  {
    "name": "Falkland Islands",
    "code": "FK",
    "emoji": "🇫🇰",
    "unicode": "U+1F1EB U+1F1F0",
    "dialCode": "+500",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FK.svg"
  },
  {
    "name": "Faroe Islands",
    "code": "FO",
    "emoji": "🇫🇴",
    "unicode": "U+1F1EB U+1F1F4",
    "dialCode": "+298",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FO.svg"
  },
  {
    "name": "Fiji",
    "code": "FJ",
    "emoji": "🇫🇯",
    "unicode": "U+1F1EB U+1F1EF",
    "dialCode": "+679",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FJ.svg"
  },
  {
    "name": "Finland",
    "code": "FI",
    "emoji": "🇫🇮",
    "unicode": "U+1F1EB U+1F1EE",
    "dialCode": "+358",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FI.svg"
  },
  {
    "name": "France",
    "code": "FR",
    "emoji": "🇫🇷",
    "unicode": "U+1F1EB U+1F1F7",
    "dialCode": "+33",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FR.svg"
  },
  {
    "name": "French Guiana",
    "code": "GF",
    "emoji": "🇬🇫",
    "unicode": "U+1F1EC U+1F1EB",
    "dialCode": "+594",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GF.svg"
  },
  {
    "name": "French Polynesia",
    "code": "PF",
    "emoji": "🇵🇫",
    "unicode": "U+1F1F5 U+1F1EB",
    "dialCode": "+689",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PF.svg"
  },
  {
    "name": "Gabon",
    "code": "GA",
    "emoji": "🇬🇦",
    "unicode": "U+1F1EC U+1F1E6",
    "dialCode": "+241",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GA.svg"
  },
  {
    "name": "Gambia",
    "code": "GM",
    "emoji": "🇬🇲",
    "unicode": "U+1F1EC U+1F1F2",
    "dialCode": "+220",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GM.svg"
  },
  {
    "name": "Georgia",
    "code": "GE",
    "emoji": "🇬🇪",
    "unicode": "U+1F1EC U+1F1EA",
    "dialCode": "+995",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GE.svg"
  },
  {
    "name": "Germany",
    "code": "DE",
    "emoji": "🇩🇪",
    "unicode": "U+1F1E9 U+1F1EA",
    "dialCode": "+49",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/DE.svg"
  },
  {
    "name": "Ghana",
    "code": "GH",
    "emoji": "🇬🇭",
    "unicode": "U+1F1EC U+1F1ED",
    "dialCode": "+233",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GH.svg"
  },
  {
    "name": "Gibraltar",
    "code": "GI",
    "emoji": "🇬🇮",
    "unicode": "U+1F1EC U+1F1EE",
    "dialCode": "+350",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GI.svg"
  },
  {
    "name": "Greece",
    "code": "GR",
    "emoji": "🇬🇷",
    "unicode": "U+1F1EC U+1F1F7",
    "dialCode": "+30",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GR.svg"
  },
  {
    "name": "Greenland",
    "code": "GL",
    "emoji": "🇬🇱",
    "unicode": "U+1F1EC U+1F1F1",
    "dialCode": "+299",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GL.svg"
  },
  {
    "name": "Grenada",
    "code": "GD",
    "emoji": "🇬🇩",
    "unicode": "U+1F1EC U+1F1E9",
    "dialCode": "+1473",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GD.svg"
  },
  {
    "name": "Guadeloupe",
    "code": "GP",
    "emoji": "🇬🇵",
    "unicode": "U+1F1EC U+1F1F5",
    "dialCode": "+590",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GP.svg"
  },
  {
    "name": "Guam",
    "code": "GU",
    "emoji": "🇬🇺",
    "unicode": "U+1F1EC U+1F1FA",
    "dialCode": "+1671",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GU.svg"
  },
  {
    "name": "Guatemala",
    "code": "GT",
    "emoji": "🇬🇹",
    "unicode": "U+1F1EC U+1F1F9",
    "dialCode": "+502",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GT.svg"
  },
  {
    "name": "Guernsey",
    "code": "GG",
    "emoji": "🇬🇬",
    "unicode": "U+1F1EC U+1F1EC",
    "dialCode": "+44",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GG.svg"
  },
  {
    "name": "Guinea",
    "code": "GN",
    "emoji": "🇬🇳",
    "unicode": "U+1F1EC U+1F1F3",
    "dialCode": "+224",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GN.svg"
  },
  {
    "name": "Guinea-Bissau",
    "code": "GW",
    "emoji": "🇬🇼",
    "unicode": "U+1F1EC U+1F1FC",
    "dialCode": "+245",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GW.svg"
  },
  {
    "name": "Guyana",
    "code": "GY",
    "emoji": "🇬🇾",
    "unicode": "U+1F1EC U+1F1FE",
    "dialCode": "+592",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GY.svg"
  },
  {
    "name": "Haiti",
    "code": "HT",
    "emoji": "🇭🇹",
    "unicode": "U+1F1ED U+1F1F9",
    "dialCode": "+509",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HT.svg"
  },
  {
    "name": "Honduras",
    "code": "HN",
    "emoji": "🇭🇳",
    "unicode": "U+1F1ED U+1F1F3",
    "dialCode": "+504",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HN.svg"
  },
  {
    "name": "Hong Kong SAR China",
    "code": "HK",
    "emoji": "🇭🇰",
    "unicode": "U+1F1ED U+1F1F0",
    "dialCode": "+852",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HK.svg"
  },
  {
    "name": "Hungary",
    "code": "HU",
    "emoji": "🇭🇺",
    "unicode": "U+1F1ED U+1F1FA",
    "dialCode": "+36",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/HU.svg"
  },
  {
    "name": "Iceland",
    "code": "IS",
    "emoji": "🇮🇸",
    "unicode": "U+1F1EE U+1F1F8",
    "dialCode": "+354",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IS.svg"
  },
  {
    "name": "India",
    "code": "IN",
    "emoji": "🇮🇳",
    "unicode": "U+1F1EE U+1F1F3",
    "dialCode": "+91",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IN.svg"
  },
  {
    "name": "Indonesia",
    "code": "ID",
    "emoji": "🇮🇩",
    "unicode": "U+1F1EE U+1F1E9",
    "dialCode": "+62",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ID.svg"
  },
  {
    "name": "Iran",
    "code": "IR",
    "emoji": "🇮🇷",
    "unicode": "U+1F1EE U+1F1F7",
    "dialCode": "+98",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IR.svg"
  },
  {
    "name": "Iraq",
    "code": "IQ",
    "emoji": "🇮🇶",
    "unicode": "U+1F1EE U+1F1F6",
    "dialCode": "+964",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IQ.svg"
  },
  {
    "name": "Ireland",
    "code": "IE",
    "emoji": "🇮🇪",
    "unicode": "U+1F1EE U+1F1EA",
    "dialCode": "+353",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IE.svg"
  },
  {
    "name": "Isle of Man",
    "code": "IM",
    "emoji": "🇮🇲",
    "unicode": "U+1F1EE U+1F1F2",
    "dialCode": "+44",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IM.svg"
  },
  {
    "name": "Israel",
    "code": "IL",
    "emoji": "🇮🇱",
    "unicode": "U+1F1EE U+1F1F1",
    "dialCode": "+972",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IL.svg"
  },
  {
    "name": "Italy",
    "code": "IT",
    "emoji": "🇮🇹",
    "unicode": "U+1F1EE U+1F1F9",
    "dialCode": "+39",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/IT.svg"
  },
  {
    "name": "Jamaica",
    "code": "JM",
    "emoji": "🇯🇲",
    "unicode": "U+1F1EF U+1F1F2",
    "dialCode": "+1876",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JM.svg"
  },
  {
    "name": "Japan",
    "code": "JP",
    "emoji": "🇯🇵",
    "unicode": "U+1F1EF U+1F1F5",
    "dialCode": "+81",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JP.svg"
  },
  {
    "name": "Jersey",
    "code": "JE",
    "emoji": "🇯🇪",
    "unicode": "U+1F1EF U+1F1EA",
    "dialCode": "+44",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JE.svg"
  },
  {
    "name": "Jordan",
    "code": "JO",
    "emoji": "🇯🇴",
    "unicode": "U+1F1EF U+1F1F4",
    "dialCode": "+962",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/JO.svg"
  },
  {
    "name": "Kazakhstan",
    "code": "KZ",
    "emoji": "🇰🇿",
    "unicode": "U+1F1F0 U+1F1FF",
    "dialCode": "+7",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KZ.svg"
  },
  {
    "name": "Kenya",
    "code": "KE",
    "emoji": "🇰🇪",
    "unicode": "U+1F1F0 U+1F1EA",
    "dialCode": "+254",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KE.svg"
  },
  {
    "name": "Kiribati",
    "code": "KI",
    "emoji": "🇰🇮",
    "unicode": "U+1F1F0 U+1F1EE",
    "dialCode": "+686",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KI.svg"
  },
  {
    "name": "Kosovo",
    "code": "XK",
    "emoji": "🇽🇰",
    "unicode": "U+1F1FD U+1F1F0",
    "dialCode": "+383",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/XK.svg"
  },
  {
    "name": "Kuwait",
    "code": "KW",
    "emoji": "🇰🇼",
    "unicode": "U+1F1F0 U+1F1FC",
    "dialCode": "+965",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KW.svg"
  },
  {
    "name": "Kyrgyzstan",
    "code": "KG",
    "emoji": "🇰🇬",
    "unicode": "U+1F1F0 U+1F1EC",
    "dialCode": "+996",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KG.svg"
  },
  {
    "name": "Laos",
    "code": "LA",
    "emoji": "🇱🇦",
    "unicode": "U+1F1F1 U+1F1E6",
    "dialCode": "+856",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LA.svg"
  },
  {
    "name": "Latvia",
    "code": "LV",
    "emoji": "🇱🇻",
    "unicode": "U+1F1F1 U+1F1FB",
    "dialCode": "+371",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LV.svg"
  },
  {
    "name": "Lebanon",
    "code": "LB",
    "emoji": "🇱🇧",
    "unicode": "U+1F1F1 U+1F1E7",
    "dialCode": "+961",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LB.svg"
  },
  {
    "name": "Lesotho",
    "code": "LS",
    "emoji": "🇱🇸",
    "unicode": "U+1F1F1 U+1F1F8",
    "dialCode": "+266",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LS.svg"
  },
  {
    "name": "Liberia",
    "code": "LR",
    "emoji": "🇱🇷",
    "unicode": "U+1F1F1 U+1F1F7",
    "dialCode": "+231",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LR.svg"
  },
  {
    "name": "Libya",
    "code": "LY",
    "emoji": "🇱🇾",
    "unicode": "U+1F1F1 U+1F1FE",
    "dialCode": "+218",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LY.svg"
  },
  {
    "name": "Liechtenstein",
    "code": "LI",
    "emoji": "🇱🇮",
    "unicode": "U+1F1F1 U+1F1EE",
    "dialCode": "+423",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LI.svg"
  },
  {
    "name": "Lithuania",
    "code": "LT",
    "emoji": "🇱🇹",
    "unicode": "U+1F1F1 U+1F1F9",
    "dialCode": "+370",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LT.svg"
  },
  {
    "name": "Luxembourg",
    "code": "LU",
    "emoji": "🇱🇺",
    "unicode": "U+1F1F1 U+1F1FA",
    "dialCode": "+352",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LU.svg"
  },
  {
    "name": "Macao SAR China",
    "code": "MO",
    "emoji": "🇲🇴",
    "unicode": "U+1F1F2 U+1F1F4",
    "dialCode": "+853",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MO.svg"
  },
  {
    "name": "Madagascar",
    "code": "MG",
    "emoji": "🇲🇬",
    "unicode": "U+1F1F2 U+1F1EC",
    "dialCode": "+261",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MG.svg"
  },
  {
    "name": "Malawi",
    "code": "MW",
    "emoji": "🇲🇼",
    "unicode": "U+1F1F2 U+1F1FC",
    "dialCode": "+265",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MW.svg"
  },
  {
    "name": "Malaysia",
    "code": "MY",
    "emoji": "🇲🇾",
    "unicode": "U+1F1F2 U+1F1FE",
    "dialCode": "+60",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MY.svg"
  },
  {
    "name": "Maldives",
    "code": "MV",
    "emoji": "🇲🇻",
    "unicode": "U+1F1F2 U+1F1FB",
    "dialCode": "+960",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MV.svg"
  },
  {
    "name": "Mali",
    "code": "ML",
    "emoji": "🇲🇱",
    "unicode": "U+1F1F2 U+1F1F1",
    "dialCode": "+223",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ML.svg"
  },
  {
    "name": "Malta",
    "code": "MT",
    "emoji": "🇲🇹",
    "unicode": "U+1F1F2 U+1F1F9",
    "dialCode": "+356",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MT.svg"
  },
  {
    "name": "Marshall Islands",
    "code": "MH",
    "emoji": "🇲🇭",
    "unicode": "U+1F1F2 U+1F1ED",
    "dialCode": "+692",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MH.svg"
  },
  {
    "name": "Martinique",
    "code": "MQ",
    "emoji": "🇲🇶",
    "unicode": "U+1F1F2 U+1F1F6",
    "dialCode": "+596",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MQ.svg"
  },
  {
    "name": "Mauritania",
    "code": "MR",
    "emoji": "🇲🇷",
    "unicode": "U+1F1F2 U+1F1F7",
    "dialCode": "+222",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MR.svg"
  },
  {
    "name": "Mauritius",
    "code": "MU",
    "emoji": "🇲🇺",
    "unicode": "U+1F1F2 U+1F1FA",
    "dialCode": "+230",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MU.svg"
  },
  {
    "name": "Mayotte",
    "code": "YT",
    "emoji": "🇾🇹",
    "unicode": "U+1F1FE U+1F1F9",
    "dialCode": "+262",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/YT.svg"
  },
  {
    "name": "Mexico",
    "code": "MX",
    "emoji": "🇲🇽",
    "unicode": "U+1F1F2 U+1F1FD",
    "dialCode": "+52",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MX.svg"
  },
  {
    "name": "Micronesia",
    "code": "FM",
    "emoji": "🇫🇲",
    "unicode": "U+1F1EB U+1F1F2",
    "dialCode": "+691",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/FM.svg"
  },
  {
    "name": "Moldova",
    "code": "MD",
    "emoji": "🇲🇩",
    "unicode": "U+1F1F2 U+1F1E9",
    "dialCode": "+373",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MD.svg"
  },
  {
    "name": "Monaco",
    "code": "MC",
    "emoji": "🇲🇨",
    "unicode": "U+1F1F2 U+1F1E8",
    "dialCode": "+377",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MC.svg"
  },
  {
    "name": "Mongolia",
    "code": "MN",
    "emoji": "🇲🇳",
    "unicode": "U+1F1F2 U+1F1F3",
    "dialCode": "+976",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MN.svg"
  },
  {
    "name": "Montenegro",
    "code": "ME",
    "emoji": "🇲🇪",
    "unicode": "U+1F1F2 U+1F1EA",
    "dialCode": "+382",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ME.svg"
  },
  {
    "name": "Montserrat",
    "code": "MS",
    "emoji": "🇲🇸",
    "unicode": "U+1F1F2 U+1F1F8",
    "dialCode": "+1664",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MS.svg"
  },
  {
    "name": "Morocco",
    "code": "MA",
    "emoji": "🇲🇦",
    "unicode": "U+1F1F2 U+1F1E6",
    "dialCode": "+212",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MA.svg"
  },
  {
    "name": "Mozambique",
    "code": "MZ",
    "emoji": "🇲🇿",
    "unicode": "U+1F1F2 U+1F1FF",
    "dialCode": "+258",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MZ.svg"
  },
  {
    "name": "Myanmar (Burma)",
    "code": "MM",
    "emoji": "🇲🇲",
    "unicode": "U+1F1F2 U+1F1F2",
    "dialCode": "+95",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MM.svg"
  },
  {
    "name": "Namibia",
    "code": "NA",
    "emoji": "🇳🇦",
    "unicode": "U+1F1F3 U+1F1E6",
    "dialCode": "+264",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NA.svg"
  },
  {
    "name": "Nauru",
    "code": "NR",
    "emoji": "🇳🇷",
    "unicode": "U+1F1F3 U+1F1F7",
    "dialCode": "+674",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NR.svg"
  },
  {
    "name": "Nepal",
    "code": "NP",
    "emoji": "🇳🇵",
    "unicode": "U+1F1F3 U+1F1F5",
    "dialCode": "+977",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NP.svg"
  },
  {
    "name": "Netherlands",
    "code": "NL",
    "emoji": "🇳🇱",
    "unicode": "U+1F1F3 U+1F1F1",
    "dialCode": "+31",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NL.svg"
  },
  {
    "name": "New Caledonia",
    "code": "NC",
    "emoji": "🇳🇨",
    "unicode": "U+1F1F3 U+1F1E8",
    "dialCode": "+687",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NC.svg"
  },
  {
    "name": "New Zealand",
    "code": "NZ",
    "emoji": "🇳🇿",
    "unicode": "U+1F1F3 U+1F1FF",
    "dialCode": "+64",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NZ.svg"
  },
  {
    "name": "Nicaragua",
    "code": "NI",
    "emoji": "🇳🇮",
    "unicode": "U+1F1F3 U+1F1EE",
    "dialCode": "+505",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NI.svg"
  },
  {
    "name": "Niger",
    "code": "NE",
    "emoji": "🇳🇪",
    "unicode": "U+1F1F3 U+1F1EA",
    "dialCode": "+227",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NE.svg"
  },
  {
    "name": "Nigeria",
    "code": "NG",
    "emoji": "🇳🇬",
    "unicode": "U+1F1F3 U+1F1EC",
    "dialCode": "+234",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg"
  },
  {
    "name": "Niue",
    "code": "NU",
    "emoji": "🇳🇺",
    "unicode": "U+1F1F3 U+1F1FA",
    "dialCode": "+683",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NU.svg"
  },
  {
    "name": "Norfolk Island",
    "code": "NF",
    "emoji": "🇳🇫",
    "unicode": "U+1F1F3 U+1F1EB",
    "dialCode": "+672",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NF.svg"
  },
  {
    "name": "North Korea",
    "code": "KP",
    "emoji": "🇰🇵",
    "unicode": "U+1F1F0 U+1F1F5",
    "dialCode": "+850",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KP.svg"
  },
  {
    "name": "Northern Mariana Islands",
    "code": "MP",
    "emoji": "🇲🇵",
    "unicode": "U+1F1F2 U+1F1F5",
    "dialCode": "+1670",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/MP.svg"
  },
  {
    "name": "Norway",
    "code": "NO",
    "emoji": "🇳🇴",
    "unicode": "U+1F1F3 U+1F1F4",
    "dialCode": "+47",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NO.svg"
  },
  {
    "name": "Oman",
    "code": "OM",
    "emoji": "🇴🇲",
    "unicode": "U+1F1F4 U+1F1F2",
    "dialCode": "+968",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/OM.svg"
  },
  {
    "name": "Pakistan",
    "code": "PK",
    "emoji": "🇵🇰",
    "unicode": "U+1F1F5 U+1F1F0",
    "dialCode": "+92",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PK.svg"
  },
  {
    "name": "Palau",
    "code": "PW",
    "emoji": "🇵🇼",
    "unicode": "U+1F1F5 U+1F1FC",
    "dialCode": "+680",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PW.svg"
  },
  {
    "name": "Palestinian Territories",
    "code": "PS",
    "emoji": "🇵🇸",
    "unicode": "U+1F1F5 U+1F1F8",
    "dialCode": "+970",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PS.svg"
  },
  {
    "name": "Panama",
    "code": "PA",
    "emoji": "🇵🇦",
    "unicode": "U+1F1F5 U+1F1E6",
    "dialCode": "+507",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PA.svg"
  },
  {
    "name": "Papua New Guinea",
    "code": "PG",
    "emoji": "🇵🇬",
    "unicode": "U+1F1F5 U+1F1EC",
    "dialCode": "+675",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PG.svg"
  },
  {
    "name": "Paraguay",
    "code": "PY",
    "emoji": "🇵🇾",
    "unicode": "U+1F1F5 U+1F1FE",
    "dialCode": "+595",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PY.svg"
  },
  {
    "name": "Peru",
    "code": "PE",
    "emoji": "🇵🇪",
    "unicode": "U+1F1F5 U+1F1EA",
    "dialCode": "+51",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PE.svg"
  },
  {
    "name": "Philippines",
    "code": "PH",
    "emoji": "🇵🇭",
    "unicode": "U+1F1F5 U+1F1ED",
    "dialCode": "+63",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PH.svg"
  },
  {
    "name": "Pitcairn Islands",
    "code": "PN",
    "emoji": "🇵🇳",
    "unicode": "U+1F1F5 U+1F1F3",
    "dialCode": "+64",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PN.svg"
  },
  {
    "name": "Poland",
    "code": "PL",
    "emoji": "🇵🇱",
    "unicode": "U+1F1F5 U+1F1F1",
    "dialCode": "+48",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PL.svg"
  },
  {
    "name": "Portugal",
    "code": "PT",
    "emoji": "🇵🇹",
    "unicode": "U+1F1F5 U+1F1F9",
    "dialCode": "+351",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PT.svg"
  },
  {
    "name": "Puerto Rico",
    "code": "PR",
    "emoji": "🇵🇷",
    "unicode": "U+1F1F5 U+1F1F7",
    "dialCode": "+1787",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PR.svg"
  },
  {
    "name": "Qatar",
    "code": "QA",
    "emoji": "🇶🇦",
    "unicode": "U+1F1F6 U+1F1E6",
    "dialCode": "+974",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/QA.svg"
  },
  {
    "name": "Réunion",
    "code": "RE",
    "emoji": "🇷🇪",
    "unicode": "U+1F1F7 U+1F1EA",
    "dialCode": "+262",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RE.svg"
  },
  {
    "name": "Romania",
    "code": "RO",
    "emoji": "🇷🇴",
    "unicode": "U+1F1F7 U+1F1F4",
    "dialCode": "+40",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg"
  },
  {
    "name": "Russia",
    "code": "RU",
    "emoji": "🇷🇺",
    "unicode": "U+1F1F7 U+1F1FA",
    "dialCode": "+7",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RU.svg"
  },
  {
    "name": "Rwanda",
    "code": "RW",
    "emoji": "🇷🇼",
    "unicode": "U+1F1F7 U+1F1FC",
    "dialCode": "+250",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RW.svg"
  },
  {
    "name": "Saint Helena",
    "code": "SH",
    "emoji": "🇸🇭",
    "unicode": "U+1F1F8 U+1F1ED",
    "dialCode": "+290",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SH.svg"
  },
  {
    "name": "Saint Kitts & Nevis",
    "code": "KN",
    "emoji": "🇰🇳",
    "unicode": "U+1F1F0 U+1F1F3",
    "dialCode": "+1869",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KN.svg"
  },
  {
    "name": "Saint Lucia",
    "code": "LC",
    "emoji": "🇱🇨",
    "unicode": "U+1F1F1 U+1F1E8",
    "dialCode": "+1758",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LC.svg"
  },
  {
    "name": "Saint Pierre & Miquelon",
    "code": "PM",
    "emoji": "🇵🇲",
    "unicode": "U+1F1F5 U+1F1F2",
    "dialCode": "+508",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/PM.svg"
  },
  {
    "name": "Samoa",
    "code": "WS",
    "emoji": "🇼🇸",
    "unicode": "U+1F1FC U+1F1F8",
    "dialCode": "+685",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WS.svg"
  },
  {
    "name": "San Marino",
    "code": "SM",
    "emoji": "🇸🇲",
    "unicode": "U+1F1F8 U+1F1F2",
    "dialCode": "+378",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SM.svg"
  },
  {
    "name": "Sao Tome & Principe",
    "code": "ST",
    "emoji": "🇸🇹",
    "unicode": "U+1F1F8 U+1F1F9",
    "dialCode": "+239",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ST.svg"
  },
  {
    "name": "Saudi Arabia",
    "code": "SA",
    "emoji": "🇸🇦",
    "unicode": "U+1F1F8 U+1F1E6",
    "dialCode": "+966",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg"
  },
  {
    "name": "Senegal",
    "code": "SN",
    "emoji": "🇸🇳",
    "unicode": "U+1F1F8 U+1F1F3",
    "dialCode": "+221",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SN.svg"
  },
  {
    "name": "Serbia",
    "code": "RS",
    "emoji": "🇷🇸",
    "unicode": "U+1F1F7 U+1F1F8",
    "dialCode": "+381",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RS.svg"
  },
  {
    "name": "Seychelles",
    "code": "SC",
    "emoji": "🇸🇨",
    "unicode": "U+1F1F8 U+1F1E8",
    "dialCode": "+248",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SC.svg"
  },
  {
    "name": "Sierra Leone",
    "code": "SL",
    "emoji": "🇸🇱",
    "unicode": "U+1F1F8 U+1F1F1",
    "dialCode": "+232",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SL.svg"
  },
  {
    "name": "Singapore",
    "code": "SG",
    "emoji": "🇸🇬",
    "unicode": "U+1F1F8 U+1F1EC",
    "dialCode": "+65",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SG.svg"
  },
  {
    "name": "Sint Maarten",
    "code": "SX",
    "emoji": "🇸🇽",
    "unicode": "U+1F1F8 U+1F1FD",
    "dialCode": "+1721",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SX.svg"
  },
  {
    "name": "Slovakia",
    "code": "SK",
    "emoji": "🇸🇰",
    "unicode": "U+1F1F8 U+1F1F0",
    "dialCode": "+421",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SK.svg"
  },
  {
    "name": "Slovenia",
    "code": "SI",
    "emoji": "🇸🇮",
    "unicode": "U+1F1F8 U+1F1EE",
    "dialCode": "+386",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SI.svg"
  },
  {
    "name": "Solomon Islands",
    "code": "SB",
    "emoji": "🇸🇧",
    "unicode": "U+1F1F8 U+1F1E7",
    "dialCode": "+677",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SB.svg"
  },
  {
    "name": "Somalia",
    "code": "SO",
    "emoji": "🇸🇴",
    "unicode": "U+1F1F8 U+1F1F4",
    "dialCode": "+252",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SO.svg"
  },
  {
    "name": "South Africa",
    "code": "ZA",
    "emoji": "🇿🇦",
    "unicode": "U+1F1FF U+1F1E6",
    "dialCode": "+27",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ZA.svg"
  },
  {
    "name": "South Korea",
    "code": "KR",
    "emoji": "🇰🇷",
    "unicode": "U+1F1F0 U+1F1F7",
    "dialCode": "+82",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/KR.svg"
  },
  {
    "name": "South Sudan",
    "code": "SS",
    "emoji": "🇸🇸",
    "unicode": "U+1F1F8 U+1F1F8",
    "dialCode": "+211",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SS.svg"
  },
  {
    "name": "Spain",
    "code": "ES",
    "emoji": "🇪🇸",
    "unicode": "U+1F1EA U+1F1F8",
    "dialCode": "+34",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/ES.svg"
  },
  {
    "name": "Sri Lanka",
    "code": "LK",
    "emoji": "🇱🇰",
    "unicode": "U+1F1F1 U+1F1F0",
    "dialCode": "+94",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/LK.svg"
  },
  {
    "name": "Sudan",
    "code": "SD",
    "emoji": "🇸🇩",
    "unicode": "U+1F1F8 U+1F1E9",
    "dialCode": "+249",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SD.svg"
  },
  {
    "name": "Suriname",
    "code": "SR",
    "emoji": "🇸🇷",
    "unicode": "U+1F1F8 U+1F1F7",
    "dialCode": "+597",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SR.svg"
  },
  {
    "name": "Sweden",
    "code": "SE",
    "emoji": "🇸🇪",
    "unicode": "U+1F1F8 U+1F1EA",
    "dialCode": "+46",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SE.svg"
  },
  {
    "name": "Switzerland",
    "code": "CH",
    "emoji": "🇨🇭",
    "unicode": "U+1F1E8 U+1F1ED",
    "dialCode": "+41",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/CH.svg"
  },
  {
    "name": "Syria",
    "code": "SY",
    "emoji": "🇸🇾",
    "unicode": "U+1F1F8 U+1F1FE",
    "dialCode": "+963",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SY.svg"
  },
  {
    "name": "Taiwan",
    "code": "TW",
    "emoji": "🇹🇼",
    "unicode": "U+1F1F9 U+1F1FC",
    "dialCode": "+886",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TW.svg"
  },
  {
    "name": "Tajikistan",
    "code": "TJ",
    "emoji": "🇹🇯",
    "unicode": "U+1F1F9 U+1F1EF",
    "dialCode": "+992",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TJ.svg"
  },
  {
    "name": "Tanzania",
    "code": "TZ",
    "emoji": "🇹🇿",
    "unicode": "U+1F1F9 U+1F1FF",
    "dialCode": "+255",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TZ.svg"
  },
  {
    "name": "Thailand",
    "code": "TH",
    "emoji": "🇹🇭",
    "unicode": "U+1F1F9 U+1F1ED",
    "dialCode": "+66",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TH.svg"
  },
  {
    "name": "Timor-Leste",
    "code": "TL",
    "emoji": "🇹🇱",
    "unicode": "U+1F1F9 U+1F1F1",
    "dialCode": "+670",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TL.svg"
  },
  {
    "name": "Togo",
    "code": "TG",
    "emoji": "🇹🇬",
    "unicode": "U+1F1F9 U+1F1EC",
    "dialCode": "+228",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TG.svg"
  },
  {
    "name": "Tokelau",
    "code": "TK",
    "emoji": "🇹🇰",
    "unicode": "U+1F1F9 U+1F1F0",
    "dialCode": "+690",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TK.svg"
  },
  {
    "name": "Tonga",
    "code": "TO",
    "emoji": "🇹🇴",
    "unicode": "U+1F1F9 U+1F1F4",
    "dialCode": "+676",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TO.svg"
  },
  {
    "name": "Trinidad & Tobago",
    "code": "TT",
    "emoji": "🇹🇹",
    "unicode": "U+1F1F9 U+1F1F9",
    "dialCode": "+1868",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TT.svg"
  },
  {
    "name": "Tunisia",
    "code": "TN",
    "emoji": "🇹🇳",
    "unicode": "U+1F1F9 U+1F1F3",
    "dialCode": "+216",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TN.svg"
  },
  {
    "name": "Turkey",
    "code": "TR",
    "emoji": "🇹🇷",
    "unicode": "U+1F1F9 U+1F1F7",
    "dialCode": "+90",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TR.svg"
  },
  {
    "name": "Turkmenistan",
    "code": "TM",
    "emoji": "🇹🇲",
    "unicode": "U+1F1F9 U+1F1F2",
    "dialCode": "+993",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TM.svg"
  },
  {
    "name": "Turks & Caicos Islands",
    "code": "TC",
    "emoji": "🇹🇨",
    "unicode": "U+1F1F9 U+1F1E8",
    "dialCode": "+1649",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TC.svg"
  },
  {
    "name": "Tuvalu",
    "code": "TV",
    "emoji": "🇹🇻",
    "unicode": "U+1F1F9 U+1F1FB",
    "dialCode": "+688",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/TV.svg"
  },
  {
    "name": "Uganda",
    "code": "UG",
    "emoji": "🇺🇬",
    "unicode": "U+1F1FA U+1F1EC",
    "dialCode": "+256",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UG.svg"
  },
  {
    "name": "Ukraine",
    "code": "UA",
    "emoji": "🇺🇦",
    "unicode": "U+1F1FA U+1F1E6",
    "dialCode": "+380",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UA.svg"
  },
  {
    "name": "United Arab Emirates",
    "code": "AE",
    "emoji": "🇦🇪",
    "unicode": "U+1F1E6 U+1F1EA",
    "dialCode": "+971",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/AE.svg"
  },
  {
    "name": "United Kingdom",
    "code": "GB",
    "emoji": "🇬🇧",
    "unicode": "U+1F1EC U+1F1E7",
    "dialCode": "+44",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg"
  },
  {
    "name": "United States",
    "code": "US",
    "emoji": "🇺🇸",
    "unicode": "U+1F1FA U+1F1F8",
    "dialCode": "+1",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg"
  },
  {
    "name": "Uruguay",
    "code": "UY",
    "emoji": "🇺🇾",
    "unicode": "U+1F1FA U+1F1FE",
    "dialCode": "+598",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UY.svg"
  },
  {
    "name": "Uzbekistan",
    "code": "UZ",
    "emoji": "🇺🇿",
    "unicode": "U+1F1FA U+1F1FF",
    "dialCode": "+998",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/UZ.svg"
  },
  {
    "name": "Vanuatu",
    "code": "VU",
    "emoji": "🇻🇺",
    "unicode": "U+1F1FB U+1F1FA",
    "dialCode": "+678",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VU.svg"
  },
  {
    "name": "Vatican City",
    "code": "VA",
    "emoji": "🇻🇦",
    "unicode": "U+1F1FB U+1F1E6",
    "dialCode": "+379",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VA.svg"
  },
  {
    "name": "Venezuela",
    "code": "VE",
    "emoji": "🇻🇪",
    "unicode": "U+1F1FB U+1F1EA",
    "dialCode": "+58",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VE.svg"
  },
  {
    "name": "Vietnam",
    "code": "VN",
    "emoji": "🇻🇳",
    "unicode": "U+1F1FB U+1F1F3",
    "dialCode": "+84",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/VN.svg"
  },
  {
    "name": "Wallis & Futuna",
    "code": "WF",
    "emoji": "🇼🇫",
    "unicode": "U+1F1FC U+1F1EB",
    "dialCode": "+681",
    "image": "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/WF.svg"
  }
]


