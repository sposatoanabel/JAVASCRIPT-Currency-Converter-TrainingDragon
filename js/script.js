/**
 *
 * @param dropDown
 * @param currencyIso
 */

/**
 * @author Anabel R. Sposato
 * @name index.html
 * @description It is a currency converter that displays an input where the customer will introduce
 * the desired amount of money (a number), a select where customer is able to choose the currency he has,
 * another select to pick the currency he wants and an output displaying the flag, the symbol
 * and the currency exchange.
 *
 */

(function () {
    var currencyInfos = {
        "USD": {
            "symbol": "$",
            "name": "US Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "USD",
            "name_plural": "US dollars"
        },
        "CAD": {
            "symbol": "CA$",
            "name": "Canadian Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "CAD",
            "name_plural": "Canadian dollars"
        },
        "EUR": {
            "symbol": "€",
            "name": "Euro",
            "symbol_native": "€",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "EUR",
            "name_plural": "euros"
        },
        "AED": {
            "symbol": "AED",
            "name": "United Arab Emirates Dirham",
            "symbol_native": "د.إ.‏",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "AED",
            "name_plural": "UAE dirhams"
        },
        "AFN": {
            "symbol": "Af",
            "name": "Afghan Afghani",
            "symbol_native": "؋",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "AFN",
            "name_plural": "Afghan Afghanis"
        },
        "ALL": {
            "symbol": "ALL",
            "name": "Albanian Lek",
            "symbol_native": "Lek",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "ALL",
            "name_plural": "Albanian lekë"
        },
        "AMD": {
            "symbol": "AMD",
            "name": "Armenian Dram",
            "symbol_native": "դր.",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "AMD",
            "name_plural": "Armenian drams"
        },
        "ARS": {
            "symbol": "AR$",
            "name": "Argentine Peso",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "ARS",
            "name_plural": "Argentine pesos"
        },
        "AUD": {
            "symbol": "AU$",
            "name": "Australian Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "AUD",
            "name_plural": "Australian dollars"
        },
        "AZN": {
            "symbol": "man.",
            "name": "Azerbaijani Manat",
            "symbol_native": "ман.",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "AZN",
            "name_plural": "Azerbaijani manats"
        },
        "BAM": {
            "symbol": "KM",
            "name": "Bosnia-Herzegovina Convertible Mark",
            "symbol_native": "KM",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BAM",
            "name_plural": "Bosnia-Herzegovina convertible marks"
        },
        "BDT": {
            "symbol": "Tk",
            "name": "Bangladeshi Taka",
            "symbol_native": "৳",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BDT",
            "name_plural": "Bangladeshi takas"
        },
        "BGN": {
            "symbol": "BGN",
            "name": "Bulgarian Lev",
            "symbol_native": "лв.",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BGN",
            "name_plural": "Bulgarian leva"
        },
        "BHD": {
            "symbol": "BD",
            "name": "Bahraini Dinar",
            "symbol_native": "د.ب.‏",
            "decimal_digits": 3,
            "rounding": 0,
            "code": "BHD",
            "name_plural": "Bahraini dinars"
        },
        "BIF": {
            "symbol": "FBu",
            "name": "Burundian Franc",
            "symbol_native": "FBu",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "BIF",
            "name_plural": "Burundian francs"
        },
        "BND": {
            "symbol": "BN$",
            "name": "Brunei Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BND",
            "name_plural": "Brunei dollars"
        },
        "BOB": {
            "symbol": "Bs",
            "name": "Bolivian Boliviano",
            "symbol_native": "Bs",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BOB",
            "name_plural": "Bolivian bolivianos"
        },
        "BRL": {
            "symbol": "R$",
            "name": "Brazilian Real",
            "symbol_native": "R$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BRL",
            "name_plural": "Brazilian reals"
        },
        "BWP": {
            "symbol": "BWP",
            "name": "Botswanan Pula",
            "symbol_native": "P",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BWP",
            "name_plural": "Botswanan pulas"
        },
        "BYR": {
            "symbol": "BYR",
            "name": "Belarusian Ruble",
            "symbol_native": "BYR",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "BYR",
            "name_plural": "Belarusian rubles"
        },
        "BZD": {
            "symbol": "BZ$",
            "name": "Belize Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "BZD",
            "name_plural": "Belize dollars"
        },
        "CDF": {
            "symbol": "CDF",
            "name": "Congolese Franc",
            "symbol_native": "FrCD",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "CDF",
            "name_plural": "Congolese francs"
        },
        "CHF": {
            "symbol": "CHF",
            "name": "Swiss Franc",
            "symbol_native": "CHF",
            "decimal_digits": 2,
            "rounding": 0.05,
            "code": "CHF",
            "name_plural": "Swiss francs"
        },
        "CLP": {
            "symbol": "CL$",
            "name": "Chilean Peso",
            "symbol_native": "$",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "CLP",
            "name_plural": "Chilean pesos"
        },
        "CNY": {
            "symbol": "CN¥",
            "name": "Chinese Yuan",
            "symbol_native": "CN¥",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "CNY",
            "name_plural": "Chinese yuan"
        },
        "COP": {
            "symbol": "CO$",
            "name": "Colombian Peso",
            "symbol_native": "$",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "COP",
            "name_plural": "Colombian pesos"
        },
        "CRC": {
            "symbol": "₡",
            "name": "Costa Rican Colón",
            "symbol_native": "₡",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "CRC",
            "name_plural": "Costa Rican colóns"
        },
        "CVE": {
            "symbol": "CV$",
            "name": "Cape Verdean Escudo",
            "symbol_native": "CV$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "CVE",
            "name_plural": "Cape Verdean escudos"
        },
        "CZK": {
            "symbol": "Kč",
            "name": "Czech Republic Koruna",
            "symbol_native": "Kč",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "CZK",
            "name_plural": "Czech Republic korunas"
        },
        "DJF": {
            "symbol": "Fdj",
            "name": "Djiboutian Franc",
            "symbol_native": "Fdj",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "DJF",
            "name_plural": "Djiboutian francs"
        },
        "DKK": {
            "symbol": "Dkr",
            "name": "Danish Krone",
            "symbol_native": "kr",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "DKK",
            "name_plural": "Danish kroner"
        },
        "DOP": {
            "symbol": "RD$",
            "name": "Dominican Peso",
            "symbol_native": "RD$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "DOP",
            "name_plural": "Dominican pesos"
        },
        "DZD": {
            "symbol": "DA",
            "name": "Algerian Dinar",
            "symbol_native": "د.ج.‏",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "DZD",
            "name_plural": "Algerian dinars"
        },
        "EEK": {
            "symbol": "Ekr",
            "name": "Estonian Kroon",
            "symbol_native": "kr",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "EEK",
            "name_plural": "Estonian kroons"
        },
        "EGP": {
            "symbol": "EGP",
            "name": "Egyptian Pound",
            "symbol_native": "ج.م.‏",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "EGP",
            "name_plural": "Egyptian pounds"
        },
        "ERN": {
            "symbol": "Nfk",
            "name": "Eritrean Nakfa",
            "symbol_native": "Nfk",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "ERN",
            "name_plural": "Eritrean nakfas"
        },
        "ETB": {
            "symbol": "Br",
            "name": "Ethiopian Birr",
            "symbol_native": "Br",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "ETB",
            "name_plural": "Ethiopian birrs"
        },
        "GBP": {
            "symbol": "£",
            "name": "British Pound Sterling",
            "symbol_native": "£",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "GBP",
            "name_plural": "British pounds sterling"
        },
        "GEL": {
            "symbol": "GEL",
            "name": "Georgian Lari",
            "symbol_native": "GEL",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "GEL",
            "name_plural": "Georgian laris"
        },
        "GHS": {
            "symbol": "GH₵",
            "name": "Ghanaian Cedi",
            "symbol_native": "GH₵",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "GHS",
            "name_plural": "Ghanaian cedis"
        },
        "GNF": {
            "symbol": "FG",
            "name": "Guinean Franc",
            "symbol_native": "FG",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "GNF",
            "name_plural": "Guinean francs"
        },
        "GTQ": {
            "symbol": "GTQ",
            "name": "Guatemalan Quetzal",
            "symbol_native": "Q",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "GTQ",
            "name_plural": "Guatemalan quetzals"
        },
        "HKD": {
            "symbol": "HK$",
            "name": "Hong Kong Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "HKD",
            "name_plural": "Hong Kong dollars"
        },
        "HNL": {
            "symbol": "HNL",
            "name": "Honduran Lempira",
            "symbol_native": "L",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "HNL",
            "name_plural": "Honduran lempiras"
        },
        "HRK": {
            "symbol": "kn",
            "name": "Croatian Kuna",
            "symbol_native": "kn",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "HRK",
            "name_plural": "Croatian kunas"
        },
        "HUF": {
            "symbol": "Ft",
            "name": "Hungarian Forint",
            "symbol_native": "Ft",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "HUF",
            "name_plural": "Hungarian forints"
        },
        "IDR": {
            "symbol": "Rp",
            "name": "Indonesian Rupiah",
            "symbol_native": "Rp",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "IDR",
            "name_plural": "Indonesian rupiahs"
        },
        "ILS": {
            "symbol": "₪",
            "name": "Israeli New Sheqel",
            "symbol_native": "₪",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "ILS",
            "name_plural": "Israeli new sheqels"
        },
        "INR": {
            "symbol": "Rs",
            "name": "Indian Rupee",
            "symbol_native": "টকা",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "INR",
            "name_plural": "Indian rupees"
        },
        "IQD": {
            "symbol": "IQD",
            "name": "Iraqi Dinar",
            "symbol_native": "د.ع.‏",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "IQD",
            "name_plural": "Iraqi dinars"
        },
        "IRR": {
            "symbol": "IRR",
            "name": "Iranian Rial",
            "symbol_native": "﷼",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "IRR",
            "name_plural": "Iranian rials"
        },
        "ISK": {
            "symbol": "Ikr",
            "name": "Icelandic Króna",
            "symbol_native": "kr",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "ISK",
            "name_plural": "Icelandic krónur"
        },
        "JMD": {
            "symbol": "J$",
            "name": "Jamaican Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "JMD",
            "name_plural": "Jamaican dollars"
        },
        "JOD": {
            "symbol": "JD",
            "name": "Jordanian Dinar",
            "symbol_native": "د.أ.‏",
            "decimal_digits": 3,
            "rounding": 0,
            "code": "JOD",
            "name_plural": "Jordanian dinars"
        },
        "JPY": {
            "symbol": "¥",
            "name": "Japanese Yen",
            "symbol_native": "￥",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "JPY",
            "name_plural": "Japanese yen"
        },
        "KES": {
            "symbol": "Ksh",
            "name": "Kenyan Shilling",
            "symbol_native": "Ksh",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "KES",
            "name_plural": "Kenyan shillings"
        },
        "KHR": {
            "symbol": "KHR",
            "name": "Cambodian Riel",
            "symbol_native": "៛",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "KHR",
            "name_plural": "Cambodian riels"
        },
        "KMF": {
            "symbol": "CF",
            "name": "Comorian Franc",
            "symbol_native": "FC",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "KMF",
            "name_plural": "Comorian francs"
        },
        "KRW": {
            "symbol": "₩",
            "name": "South Korean Won",
            "symbol_native": "₩",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "KRW",
            "name_plural": "South Korean won"
        },
        "KWD": {
            "symbol": "KD",
            "name": "Kuwaiti Dinar",
            "symbol_native": "د.ك.‏",
            "decimal_digits": 3,
            "rounding": 0,
            "code": "KWD",
            "name_plural": "Kuwaiti dinars"
        },
        "KZT": {
            "symbol": "KZT",
            "name": "Kazakhstani Tenge",
            "symbol_native": "тңг.",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "KZT",
            "name_plural": "Kazakhstani tenges"
        },
        "LBP": {
            "symbol": "LB£",
            "name": "Lebanese Pound",
            "symbol_native": "ل.ل.‏",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "LBP",
            "name_plural": "Lebanese pounds"
        },
        "LKR": {
            "symbol": "SLRs",
            "name": "Sri Lankan Rupee",
            "symbol_native": "SL Re",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "LKR",
            "name_plural": "Sri Lankan rupees"
        },
        "LTL": {
            "symbol": "Lt",
            "name": "Lithuanian Litas",
            "symbol_native": "Lt",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "LTL",
            "name_plural": "Lithuanian litai"
        },
        "LVL": {
            "symbol": "Ls",
            "name": "Latvian Lats",
            "symbol_native": "Ls",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "LVL",
            "name_plural": "Latvian lati"
        },
        "LYD": {
            "symbol": "LD",
            "name": "Libyan Dinar",
            "symbol_native": "د.ل.‏",
            "decimal_digits": 3,
            "rounding": 0,
            "code": "LYD",
            "name_plural": "Libyan dinars"
        },
        "MAD": {
            "symbol": "MAD",
            "name": "Moroccan Dirham",
            "symbol_native": "د.م.‏",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "MAD",
            "name_plural": "Moroccan dirhams"
        },
        "MDL": {
            "symbol": "MDL",
            "name": "Moldovan Leu",
            "symbol_native": "MDL",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "MDL",
            "name_plural": "Moldovan lei"
        },
        "MGA": {
            "symbol": "MGA",
            "name": "Malagasy Ariary",
            "symbol_native": "MGA",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "MGA",
            "name_plural": "Malagasy Ariaries"
        },
        "MKD": {
            "symbol": "MKD",
            "name": "Macedonian Denar",
            "symbol_native": "MKD",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "MKD",
            "name_plural": "Macedonian denari"
        },
        "MMK": {
            "symbol": "MMK",
            "name": "Myanma Kyat",
            "symbol_native": "K",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "MMK",
            "name_plural": "Myanma kyats"
        },
        "MOP": {
            "symbol": "MOP$",
            "name": "Macanese Pataca",
            "symbol_native": "MOP$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "MOP",
            "name_plural": "Macanese patacas"
        },
        "MUR": {
            "symbol": "MURs",
            "name": "Mauritian Rupee",
            "symbol_native": "MURs",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "MUR",
            "name_plural": "Mauritian rupees"
        },
        "MXN": {
            "symbol": "MX$",
            "name": "Mexican Peso",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "MXN",
            "name_plural": "Mexican pesos"
        },
        "MYR": {
            "symbol": "RM",
            "name": "Malaysian Ringgit",
            "symbol_native": "RM",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "MYR",
            "name_plural": "Malaysian ringgits"
        },
        "MZN": {
            "symbol": "MTn",
            "name": "Mozambican Metical",
            "symbol_native": "MTn",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "MZN",
            "name_plural": "Mozambican meticals"
        },
        "NAD": {
            "symbol": "N$",
            "name": "Namibian Dollar",
            "symbol_native": "N$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "NAD",
            "name_plural": "Namibian dollars"
        },
        "NGN": {
            "symbol": "₦",
            "name": "Nigerian Naira",
            "symbol_native": "₦",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "NGN",
            "name_plural": "Nigerian nairas"
        },
        "NIO": {
            "symbol": "C$",
            "name": "Nicaraguan Córdoba",
            "symbol_native": "C$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "NIO",
            "name_plural": "Nicaraguan córdobas"
        },
        "NOK": {
            "symbol": "Nkr",
            "name": "Norwegian Krone",
            "symbol_native": "kr",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "NOK",
            "name_plural": "Norwegian kroner"
        },
        "NPR": {
            "symbol": "NPRs",
            "name": "Nepalese Rupee",
            "symbol_native": "नेरू",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "NPR",
            "name_plural": "Nepalese rupees"
        },
        "NZD": {
            "symbol": "NZ$",
            "name": "New Zealand Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "NZD",
            "name_plural": "New Zealand dollars"
        },
        "OMR": {
            "symbol": "OMR",
            "name": "Omani Rial",
            "symbol_native": "ر.ع.‏",
            "decimal_digits": 3,
            "rounding": 0,
            "code": "OMR",
            "name_plural": "Omani rials"
        },
        "PAB": {
            "symbol": "B/.",
            "name": "Panamanian Balboa",
            "symbol_native": "B/.",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "PAB",
            "name_plural": "Panamanian balboas"
        },
        "PEN": {
            "symbol": "S/.",
            "name": "Peruvian Nuevo Sol",
            "symbol_native": "S/.",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "PEN",
            "name_plural": "Peruvian nuevos soles"
        },
        "PHP": {
            "symbol": "₱",
            "name": "Philippine Peso",
            "symbol_native": "₱",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "PHP",
            "name_plural": "Philippine pesos"
        },
        "PKR": {
            "symbol": "PKRs",
            "name": "Pakistani Rupee",
            "symbol_native": "₨",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "PKR",
            "name_plural": "Pakistani rupees"
        },
        "PLN": {
            "symbol": "zł",
            "name": "Polish Zloty",
            "symbol_native": "zł",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "PLN",
            "name_plural": "Polish zlotys"
        },
        "PYG": {
            "symbol": "₲",
            "name": "Paraguayan Guarani",
            "symbol_native": "₲",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "PYG",
            "name_plural": "Paraguayan guaranis"
        },
        "QAR": {
            "symbol": "QR",
            "name": "Qatari Rial",
            "symbol_native": "ر.ق.‏",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "QAR",
            "name_plural": "Qatari rials"
        },
        "RON": {
            "symbol": "RON",
            "name": "Romanian Leu",
            "symbol_native": "RON",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "RON",
            "name_plural": "Romanian lei"
        },
        "RSD": {
            "symbol": "din.",
            "name": "Serbian Dinar",
            "symbol_native": "дин.",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "RSD",
            "name_plural": "Serbian dinars"
        },
        "RUB": {
            "symbol": "RUB",
            "name": "Russian Ruble",
            "symbol_native": "руб.",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "RUB",
            "name_plural": "Russian rubles"
        },
        "RWF": {
            "symbol": "RWF",
            "name": "Rwandan Franc",
            "symbol_native": "FR",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "RWF",
            "name_plural": "Rwandan francs"
        },
        "SAR": {
            "symbol": "SR",
            "name": "Saudi Riyal",
            "symbol_native": "ر.س.‏",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "SAR",
            "name_plural": "Saudi riyals"
        },
        "SDG": {
            "symbol": "SDG",
            "name": "Sudanese Pound",
            "symbol_native": "SDG",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "SDG",
            "name_plural": "Sudanese pounds"
        },
        "SEK": {
            "symbol": "Skr",
            "name": "Swedish Krona",
            "symbol_native": "kr",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "SEK",
            "name_plural": "Swedish kronor"
        },
        "SGD": {
            "symbol": "S$",
            "name": "Singapore Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "SGD",
            "name_plural": "Singapore dollars"
        },
        "SOS": {
            "symbol": "Ssh",
            "name": "Somali Shilling",
            "symbol_native": "Ssh",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "SOS",
            "name_plural": "Somali shillings"
        },
        "SYP": {
            "symbol": "SY£",
            "name": "Syrian Pound",
            "symbol_native": "ل.س.‏",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "SYP",
            "name_plural": "Syrian pounds"
        },
        "THB": {
            "symbol": "฿",
            "name": "Thai Baht",
            "symbol_native": "฿",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "THB",
            "name_plural": "Thai baht"
        },
        "TND": {
            "symbol": "DT",
            "name": "Tunisian Dinar",
            "symbol_native": "د.ت.‏",
            "decimal_digits": 3,
            "rounding": 0,
            "code": "TND",
            "name_plural": "Tunisian dinars"
        },
        "TOP": {
            "symbol": "T$",
            "name": "Tongan Paʻanga",
            "symbol_native": "T$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "TOP",
            "name_plural": "Tongan paʻanga"
        },
        "TRY": {
            "symbol": "TL",
            "name": "Turkish Lira",
            "symbol_native": "TL",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "TRY",
            "name_plural": "Turkish Lira"
        },
        "TTD": {
            "symbol": "TT$",
            "name": "Trinidad and Tobago Dollar",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "TTD",
            "name_plural": "Trinidad and Tobago dollars"
        },
        "TWD": {
            "symbol": "NT$",
            "name": "New Taiwan Dollar",
            "symbol_native": "NT$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "TWD",
            "name_plural": "New Taiwan dollars"
        },
        "TZS": {
            "symbol": "TSh",
            "name": "Tanzanian Shilling",
            "symbol_native": "TSh",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "TZS",
            "name_plural": "Tanzanian shillings"
        },
        "UAH": {
            "symbol": "₴",
            "name": "Ukrainian Hryvnia",
            "symbol_native": "₴",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "UAH",
            "name_plural": "Ukrainian hryvnias"
        },
        "UGX": {
            "symbol": "USh",
            "name": "Ugandan Shilling",
            "symbol_native": "USh",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "UGX",
            "name_plural": "Ugandan shillings"
        },
        "UYU": {
            "symbol": "$U",
            "name": "Uruguayan Peso",
            "symbol_native": "$",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "UYU",
            "name_plural": "Uruguayan pesos"
        },
        "UZS": {
            "symbol": "UZS",
            "name": "Uzbekistan Som",
            "symbol_native": "UZS",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "UZS",
            "name_plural": "Uzbekistan som"
        },
        "VEF": {
            "symbol": "Bs.F.",
            "name": "Venezuelan Bolívar",
            "symbol_native": "Bs.F.",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "VEF",
            "name_plural": "Venezuelan bolívars"
        },
        "VND": {
            "symbol": "₫",
            "name": "Vietnamese Dong",
            "symbol_native": "₫",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "VND",
            "name_plural": "Vietnamese dong"
        },
        "XAF": {
            "symbol": "FCFA",
            "name": "CFA Franc BEAC",
            "symbol_native": "FCFA",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "XAF",
            "name_plural": "CFA francs BEAC"
        },
        "XOF": {
            "symbol": "CFA",
            "name": "CFA Franc BCEAO",
            "symbol_native": "CFA",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "XOF",
            "name_plural": "CFA francs BCEAO"
        },
        "YER": {
            "symbol": "YR",
            "name": "Yemeni Rial",
            "symbol_native": "ر.ي.‏",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "YER",
            "name_plural": "Yemeni rials"
        },
        "ZAR": {
            "symbol": "R",
            "name": "South African Rand",
            "symbol_native": "R",
            "decimal_digits": 2,
            "rounding": 0,
            "code": "ZAR",
            "name_plural": "South African rand"
        },
        "ZMK": {
            "symbol": "ZK",
            "name": "Zambian Kwacha",
            "symbol_native": "ZK",
            "decimal_digits": 0,
            "rounding": 0,
            "code": "ZMK",
            "name_plural": "Zambian kwachas"
        }
    };
    var rates = {
        "AED": 3.672908,
        "AFN": 67.453651,
        "ALL": 120.8024,
        "AMD": 475.725004,
        "ANG": 1.77625,
        "AOA": 165.563835,
        "ARS": 14.66567,
        "AUD": 1.299825,
        "AWG": 1.793333,
        "AZN": 1.619775,
        "BAM": 1.739291,
        "BBD": 2,
        "BDT": 78.323431,
        "BGN": 1.738054,
        "BHD": 0.377025,
        "BIF": 1658.539983,
        "BMD": 1,
        "BND": 1.339075,
        "BOB": 6.921034,
        "BRL": 3.182102,
        "BSD": 1,
        "BTC": 0.001736966627,
        "BTN": 66.833233,
        "BWP": 10.2981,
        "BYN": 1.94775,
        "BYR": 20026.25,
        "BZD": 2.001431,
        "CAD": 1.287598,
        "CDF": 982.86375,
        "CHF": 0.965059,
        "CLF": 0.024612,
        "CLP": 650.587605,
        "CNY": 6.627776,
        "COP": 2902.234984,
        "CRC": 548.057596,
        "CUC": 1,
        "CUP": 24.728383,
        "CVE": 98.209199,
        "CZK": 24.01905,
        "DJF": 177.449252,
        "DKK": 6.614084,
        "DOP": 45.97753,
        "DZD": 108.891279,
        "EEK": 13.943175,
        "EGP": 8.855705,
        "ERN": 15.0015,
        "ETB": 22.09257,
        "EUR": 0.88725,
        "FJD": 2.052733,
        "FKP": 0.767695,
        "GBP": 0.767695,
        "GEL": 2.3271,
        "GGP": 0.767695,
        "GHS": 3.932035,
        "GIP": 0.767695,
        "GMD": 42.8759,
        "GNF": 9023.16,
        "GTQ": 7.503911,
        "GYD": 205.789667,
        "HKD": 7.755022,
        "HNL": 22.8551,
        "HRK": 6.64932,
        "HTG": 63.906163,
        "HUF": 275.329,
        "IDR": 13092.533333,
        "ILS": 3.783203,
        "IMP": 0.767695,
        "INR": 66.81481,
        "IQD": 1166.1166,
        "IRR": 30066,
        "ISK": 117.4776,
        "JEP": 0.767695,
        "JMD": 126.806401,
        "JOD": 0.70963,
        "JPY": 100.511499,
        "KES": 101.47144,
        "KGS": 68.757802,
        "KHR": 4075.735,
        "KMF": 437.483333,
        "KPW": 899.91,
        "KRW": 1094.476667,
        "KWD": 0.301445,
        "KYD": 0.824287,
        "KZT": 343.665201,
        "LAK": 8082.25,
        "LBP": 1509.016667,
        "LKR": 145.251001,
        "LRD": 94.25,
        "LSL": 13.33656,
        "LTL": 3.062586,
        "LVL": 0.624376,
        "LYD": 1.38357,
        "MAD": 9.703613,
        "MDL": 19.69246,
        "MGA": 3026.288333,
        "MKD": 54.71922,
        "MMK": 1190.25,
        "MNT": 2209.666667,
        "MOP": 7.98462,
        "MRO": 354.907333,
        "MTL": 0.683602,
        "MUR": 34.704263,
        "MVR": 15.151667,
        "MWK": 717.421825,
        "MXN": 18.01147,
        "MYR": 3.990245,
        "MZN": 71.200001,
        "NAD": 13.31816,
        "NGN": 320.3708,
        "NIO": 28.84743,
        "NOK": 8.208897,
        "NPR": 106.786099,
        "NZD": 1.3762,
        "OMR": 0.384984,
        "PAB": 1,
        "PEN": 3.3082,
        "PGK": 3.16675,
        "PHP": 46.2758,
        "PKR": 104.622,
        "PLN": 3.800152,
        "PYG": 5512.708333,
        "QAR": 3.640554,
        "RON": 3.963007,
        "RSD": 109.58358,
        "RUB": 63.84173,
        "RWF": 794.40966,
        "SAR": 3.750165,
        "SBD": 7.810781,
        "SCR": 13.2389,
        "SDG": 6.07262,
        "SEK": 8.427343,
        "SGD": 1.34054,
        "SHP": 0.767695,
        "SLL": 5557.5,
        "SOS": 579.859167,
        "SRD": 7.1725,
        "STD": 21878.9,
        "SVC": 8.738245,
        "SYP": 214.920002,
        "SZL": 13.32706,
        "THB": 34.62276,
        "TJS": 7.86775,
        "TMT": 3.471433,
        "TND": 2.195965,
        "TOP": 2.25385,
        "TRY": 2.932306,
        "TTD": 6.6948,
        "TWD": 31.27415,
        "TZS": 2184.113333,
        "UAH": 24.95258,
        "UGX": 3366.103333,
        "USD": 1,
        "UYU": 28.7179,
        "UZS": 2989.5,
        "VEF": 9.977012,
        "VND": 22255.733333,
        "VUV": 105.769999,
        "WST": 2.539967,
        "XAF": 584.170421,
        "XAG": 0.0501365,
        "XAU": 0.0007415,
        "XCD": 2.69902,
        "XDR": 0.715228,
        "XOF": 586.905322,
        "XPD": 0.001488,
        "XPF": 106.04375,
        "XPT": 0.000882,
        "YER": 250.075999,
        "ZAR": 13.3203,
        "ZMK": 5252.024745,
        "ZMW": 10.14235,
        "ZWL": 322.322775
    };
    var
        amountInput = document.getElementById("amount"),
        dropDownCurrencyInput = document.getElementById("currencyInput"),
        dropDownCurrencyOutput = document.getElementById("currencyOutput"),
        outputCurrencyValue = document.getElementById("outputCurrencyValue"),
        flags = document.getElementById("flags")
        ;

    /**
     * @name createDropDown
     * @param dropDown
     * @description this will create both dropdowns in the dom looping through the variable
     * currencyInfos that contains the currency Iso of each country.
     * We will need to create in the html the options with the name of the currency,
     * and set the attribute value as a string.
     */
    var
        createDropDown = function (dropDown) {

            for (currencyIso in currencyInfos) {
                var currencyOption = document.createElement("option"); // creates the element in the dom
                currencyOption.innerHTML = currencyInfos[currencyIso].name;
                currencyOption.setAttribute("value", currencyIso);
                dropDown.appendChild(currencyOption); // dropDown parameter prevents of repeating twice the function.
            }
        },//createDropDown()

        /**
         * @name updateRate
         * @description this function will create the output that will display the currency exchange. In order to achieve this,
         * we need to get the value of the amount, the rate of the currency that the customer has and
         * the rate of the currency he wants. As a result,  you will need to calculate the result compounded
         * by the selected country flag, the symbol and the rate. This last one will have to be fixed
         * because there are some countries whose currency doesn't have decimals digits.
         */


        updateRate = function () {
            var
                amount = amountInput.value,
                inputRate = rates[dropDownCurrencyInput.value],
                outputRate = rates[dropDownCurrencyOutput.value],
                result = amount * outputRate / inputRate,
                currencyOutputIso = dropDownCurrencyOutput.value,
                currencyOutputInfo = currencyInfos[dropDownCurrencyOutput.value]
                ;

            flags.src = "img/" + currencyOutputIso.toLowerCase().substring(0, 2) + ".svg";
            outputCurrencyValue.innerHTML = currencyOutputInfo.symbol_native + " " + result.toFixed(currencyOutputInfo.decimal_digits);
        },//updateRate()


        addEventListeners = function () {
            amount.addEventListener("change", updateRate);
            currencyInput.addEventListener("change", updateRate);
            currencyOutput.addEventListener("change", updateRate);

        }, //addEventListeners


        init = function () {
            createDropDown(dropDownCurrencyInput);
            createDropDown(dropDownCurrencyOutput);
            addEventListeners();
            updateRate();
        }

        ;//end init

    //onload initialiser
    window.addEventListener("load", init);

})();