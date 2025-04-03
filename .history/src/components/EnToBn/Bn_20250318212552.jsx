const Bn = ({content}) => {
    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return content.toString().replace(/\d/g, (d) => bengaliDigits[d]);
  };
export default Bn;