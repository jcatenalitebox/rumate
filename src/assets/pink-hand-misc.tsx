type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

const PinkHandMisc = ({ width = 28, height = 17 }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 197 321' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M142.666 195.757C154.874 256.8 178.274 321.254 196.341 345.11C173.187 359.423 127.756 358.792 107.934 356.687C-42.5673 366.256 13.3885 211.623 5.84587 141.459C-10.5725 59.367 16.8967 32.5293 32.6836 29.3719C35.3148 1.4818 57.4164 0.429298 59.5213 8.84901C63.7311 1.48188 71.6246 -0.119755 75.8344 0.429299C89.5164 2.21371 90.5689 13.0588 91.0951 19.3736C95.3049 9.69097 104.075 10.4277 107.934 12.0064C115.091 14.1113 116.179 25.8638 115.828 31.4769V48.3162V118.831C128.878 88.0991 146.525 88.8359 153.716 93.0457C170.977 101.886 158.452 131.207 148.454 143.661C133.193 168.393 141.789 186.987 142.666 195.757Z'
        fill='#FFDFEF'
      />
      <path
        d='M59.5214 9.47217C52.6803 25.2591 39.5246 43.054 59.5214 110.411'
        stroke='#5FAEFF'
        stroke-width='2.10492'
        stroke-linecap='round'
      />
      <path
        d='M90.5688 19.9967C85.1311 36.4852 78.69 73.1543 85.8467 111.464'
        stroke='#5FAEFF'
        stroke-width='2.10492'
        stroke-linecap='round'
      />
      <path
        d='M115.828 119.454C113.723 127.348 107.942 131.085 112.144 159.877'
        stroke='#5FAEFF'
        stroke-width='2.10492'
        stroke-linecap='round'
      />
    </svg>
  );
};

export default PinkHandMisc;
