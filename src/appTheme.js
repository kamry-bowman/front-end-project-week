

const tundoraGray = '#4A4A4A';
const white = '#FFFFFF';
const alto =  '#D8D8D8';
const concreteWhite = '#F3F3F3';
const scooterBlue = '#2BC1C4';
const monzaRed = '#D0021B';
const dustyGray = '#979797';
// const indigoBlue = '#3E6ACE';
// const seaYellow = '#FFAE0C';
// const neonCarrot = '#FF9238';
const teal = '#008A8A';



export default {
  font: {
    heading: "'Roboto', sans-serif",
    body: "'Raleway', sans-serif",
  },
  color: {
    headingText: tundoraGray,
    generalText: tundoraGray,
    modalBG: tundoraGray,
    modalColor: concreteWhite,
    modalText: tundoraGray,
    buttonText: white,
    tagText: white,
    formText: tundoraGray,
    sideBarBG: alto,
    mainPaneBG: concreteWhite,
    previewNoteBG: white,
    buttonBG: scooterBlue,
    buttonDangerBG: monzaRed,
    deleteButtonBG: monzaRed,
    border: dustyGray,
    tagBG: teal,
    tagDisplayBG: alto,
  },
  dimensions: {
    main: {
      maxWidth: '670px',
      h1FontSize: '22px',
      borderWidth: '1px',
    },
    button: {
      width: '190px',
      height: '42px',
      fontSize: '16px',
      margin: '10px 0px',
      borderRadius: '1px',
      borderWidth: '1px',
    },
    sideBar: {
      width: '220px',
      padding: '22px 15px',
      headingFontSize: '36px',
      headingMargin: '0 0 15px 0',
      headingLineHeight: `${30 / 36}`,
      borderWidth: '1px',
    },
    notePreview: {
      width: '194px',
      height: '200px',
      padding: ' 13px 18px',
      borderWidth: '1px',
      headingFontSize: '16px',
      headingPadding: '0 0 7px 0',
      textPadding: '10px 0 4px 0',
      textFontSize: '12px',
      textLineHeight: '2',
    },
    noteGrid: {
      headingMargin: '0 0 20px 0',
      searchFormMargin: '10px 0 10px 1px',
      searchForminputBorderRadius: '2px',
      inputBorderRadius: '2px',
      inputBorderWidth: '1px',
      inputWidth: '300px',
      inputPadding: '4px',
      labelFontSize: '12px',
      labelPadding: '2px 0px',
      padding: '58px 27px',
      gridGap: '24px 16px',
      gridPadding: '1px',
      borderWidth: '1px',
    },
    viewNote: {
      padding: '20px 26px',
      linkFontSize: '14px',
      linkPadding: '0 7px',
      topControlsPadding: '0 0 23px 0',
      headingPadding: '0 0 32px 0',
      textFontSize: '14px',
      textLineHeight: '2',
    },
    noteForm: {
      padding: '58px 30px',
      headingPadding: '0 0 28px 0',
      inputBorderRadius: '2px',
      inputWidth: '100%',
      inputTitleMargin: '0 0 14px 0',
      inputTitleHeight: '42px',
      inputTitleWidth: '356px',
      inputTitlePadding: '11px',
      inputTextMinHeight: '348px',
      inputTextLineHeight: '1.8',
      inputTextPadding: '18px 22px ',
      inputTextMargin: '0 0 4px 0',
      labelFontSize: '12px',
      labelPadding: '2px 0px',
      borderWidth: '1px',
    },
    noteModal: {
      modalWidth: '530px',
      modalWidthNum: 530,
      modalHeight: '180px',
      modalYOffSet: '170px',
      borderWidth: '1px',
      buttonOuterPadding: '5px 62px',
      promptFontSize: '15px',
    },
    tagDisplay: {
      height: `${29 * 3}px`,
      tagWidth: '80px',
      tagHeight: '25px',
      fontSize: '12px',
      tagMargin: '2px 4px',
      tagPadding: '0 2px',
      borderRadius: '1px',
      borderWidth: '1px',
      iconHeight: '25px',
      iconContainerHeight: '34px',
    },
  },
};