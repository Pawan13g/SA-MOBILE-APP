import Svg, { Path, Defs, ClipPath } from "react-native-svg";

export const MailIcon = (props: any) => {
  return (
    <Svg
      stroke="black"
      fill="black"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height="25px"
      width="25px"
      {...props}
    >
      <Path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"></Path>
    </Svg>
  );
};

export const PasswordIcon = (props: any) => {
  return (
    <Svg
      stroke="black"
      fill="black"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="25px"
      width="25px"
      {...props}
    >
      <Path d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16ZM11 14V16H13V14H11ZM7 14V16H9V14H7ZM15 14V16H17V14H15Z"></Path>
    </Svg>
  );
};

export const EyeHiddenIcon = (props: any) => {
  return (
    <Svg
      stroke="black"
      fill="black"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height="20px"
      width="20px"
      {...props}
    >
      <Defs>
        <ClipPath>
          <Path
            fill="none"
            d="M124-288l388-672 388 672H124z"
            clip-rule="evenodd"
          ></Path>
        </ClipPath>
      </Defs>
      <Path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"></Path>
      <Path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"></Path>
    </Svg>
  );
};

export const EyeVisibleIcon = (props: any) => {
  return (
    <Svg
      stroke="black"
      fill="black"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height="20px"
      width="20px"
      {...props}
    >
      <Path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></Path>
    </Svg>
  );
};

