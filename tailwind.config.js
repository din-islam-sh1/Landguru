/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '315px',
      'sm': '549px',
      'md': '755px',
      'lg': '1255px',
      'xl': '1991px'
    },
 
    container: {
      padding: {

      }
    },

    borderRadius: {
      '11': '11px',
      '25': '25px',
      fiftyPX: "50px"
    },

    extend: {
      fontFamily: {
        DM_Sans: "'DM Sans', sans-serif;",
        Inter: "'Inter', sans-serif;"
      },

      fontSize: {
        '15': '15px',
        '18': "18px",
        '22': "22px",
        '30': '30px',
        '36': '36px',
        '48': '48px',
        '55': '55px',
        px70: "70px",
      },

      spacing: {
        '-9': '-9px',
        '6': '6px',
        '9': '9px',
        '11': '11px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '22': '22px',
        '24': '24px',
        '27': '27px',
        '29': '29px',
        '34': '34px',
        '36': '36px',
        '41': '41px',
        '45': '45px',
        '48': '48px',
        '51': '51px',
        '54': '54px',
        '57': '57px',
        '65': '65px',
        '68': '68px',
        '70': '70px',
        '79': '79px',
        '90': '90px',
        '100': '100px',
        '111': '70px',
        '120': '120px',
        '130': '130px',
        '135': '135px',
        '140': '140px',
        '155': '155px',
        '160': '160px',
        '180': '180px',
        '190': '190px',
        '200': '200px',
        '240': '240px',
        '255': '255px',
        '285': '285px',
        '300': '300px',
        '335': '335px',
        '350': '350px',
        '385': '385px',
        '400': '400px',
        '410': '410px',
        '415': '415px',
        '421': '421px',
        '430': '430px'
      },

      lineHeight: {
        '26': '26px',
        '30':'30px',
        "34": "34px",
        '36': '36px',
        "38": "38px",
        'h2-lineHeight': "48px",
        '55': '55px',
        '70': '70px',
        "79": "79px",
        '125': '125px'
      },

      letterSpacing: {
        '-0.16': '-0.16px',
        '-0.55px': '-0.55px',
        '2.1': '2.1px'
      },

      colors: {
        fullBgColor: "#FAAE1B",
        lightBlack: "#02073E",
        primary: "#EA3A60",
        titleColor: "#0F2137",
        paraColor: "#343D48",
        lightGray: '#F7F8FB',
        borderColor: '#F3F4F5',
        pricingBlue: '#2563FF',
        reviewColor: '#E4E4E4',
        last: '#E5ECF4'
      },

      height: {
        '57': '57px',
        '61': '61px',
        '70': '70px',
        '125': '125px',
        '460': '460px',
        '615': '615px',
      },

      width: {
        '57': '57px',
        '70': '70px',
        '125': '125px',
        '540': '540px',
        '960': '960px',
        '35%': '36%',
        '40%': '40%',
        '55%': '55%',
        '45%': '45%',
        '200%': '200%'
      },

      borderWidth: {
        '15': '15px'
      }
    },
  },
  plugins: [],
}
