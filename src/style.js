const styles = {
  boxWidth: "xl:max-w-[1440px] w-full",

  heading2: "font-poppins font-bold xs:text-[56px] text-[48px] text-white xs:leading-[82px] leading-[72px] w-full",
  paragraph: "font-poppins font-normal text-gray-300 text-[16px] leading-[28px] tracking-wide",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",
  flexBetween: "flex justify-between items-center",

  paddingX: "sm:px-24 px-6",
  paddingY: "sm:py-24 py-12",
  padding: "sm:px-24 px-6 sm:py-20 py-12",

  marginX: "sm:mx-24 mx-6",
  marginY: "sm:my-24 my-12",

  gradientText: "bg-gradient-to-r from-[#00DFA2] to-[#00B4D8] bg-clip-text text-transparent",
  gradientBg: "bg-gradient-to-b from-[#0F172A] to-[#1E293B]",
  glassEffect: "backdrop-filter backdrop-blur-lg bg-opacity-30 border border-opacity-20 border-gray-700",
  neonEffect: "shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-shadow",
  cardHover: "hover:scale-105 transition-transform duration-300 hover:shadow-xl"
}

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY} ${styles.gradientBg} ${styles.glassEffect}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY} ${styles.gradientBg} ${styles.glassEffect}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-16 mr-0 md:mt-0 mt-16 relative ${styles.glassEffect} rounded-3xl p-8 ${styles.neonEffect}`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-16 ml-0 md:mt-0 mt-16 relative ${styles.glassEffect} rounded-3xl p-8 ${styles.neonEffect}`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col space-y-8 bg-opacity-20 backdrop-blur-lg p-8 rounded-3xl`,
  card: `bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-6 ${styles.glassEffect} ${styles.cardHover}`,
  button: `px-8 py-3 bg-gradient-to-r from-[#3B82F6] to-[#9333EA] text-white font-semibold rounded-lg ${styles.neonEffect} transition-all duration-300`
}

export default styles;