type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

const PencilMisc = ({ width = 28, height = 17 }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9.71667 5.51667L10.4833 6.28333L2.93333 13.8333H2.16667V13.0667L9.71667 5.51667ZM12.7167 0.5C12.5083 0.5 12.2917 0.583333 12.1333 0.741667L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741667C13.1417 0.575 12.9333 0.5 12.7167 0.5ZM9.71667 3.15833L0.5 12.375V15.5H3.625L12.8417 6.28333L9.71667 3.15833Z'
        fill='#1B69F8'
      />
    </svg>
  );
};

export default PencilMisc;
