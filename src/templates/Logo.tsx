import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const TreasureIcon = (props: ILogoProps) => {
  const size = props.xl ? '64' : '44';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill="#91949B"
        d="M5.961 32l4.337-8.5L5.961 17H58l-4.337 6.5L58 32H5.961z"
        transform="matrix(.31 0 0 .31 12 12) translate(-.02 -7.5) translate(-31.98 -24.5)"
      ></path>
      <path
        fill="#8B8E98"
        d="M10.298 24l-4.337-7H58l-4.337 7H10.298z"
        transform="matrix(.31 0 0 .31 12 12) translate(-.02 -11.5) translate(-31.98 -20.5)"
      ></path>
      <path
        fill="#8D6C9F"
        d="M53.663 25H10.297a.999.999 0 01-.85-.474l-4.336-7a1 1 0 011.7-1.053L10.854 23h42.252l4.044-6.526a.996.996 0 011.376-.323c.47.29.614.907.323 1.376l-4.337 7a.997.997 0 01-.849.473z"
        transform="matrix(.31 0 0 .31 12 12) translate(-.02 -11.5) translate(-31.98 -20.5)"
      ></path>
      <path
        fill="#FFEB9B"
        d="M52.218 34a4.335 4.335 0 00-4.337-4.333 4.335 4.335 0 00-4.337-4.333c-.684 0-1.321.172-1.897.454a3.598 3.598 0 00-3.163-1.898 3.6 3.6 0 00-1.917.56 2.856 2.856 0 00-1.697-.56c-.542 0-1.042.157-1.476.417A3.6 3.6 0 0029.812 21a3.607 3.607 0 00-3.55 2.98 3.642 3.642 0 00-.786-.091 3.6 3.6 0 00-3.583 3.306 2.857 2.857 0 00-1.476-.417 2.89 2.89 0 00-2.891 2.889c0 .026.007.049.007.074A3.612 3.612 0 0013.261 34h38.957z"
        transform="matrix(.31 0 0 .31 12 12) translate(.7 -4.5) translate(-32.7 -27.5)"
      ></path>
      <path
        fill="#8D6C9F"
        d="M52 35H13.072a1 1 0 01-.981-.806 4.617 4.617 0 014.372-5.525 3.898 3.898 0 013.759-2.892c.255 0 .509.026.76.078a4.563 4.563 0 014.295-2.967h.062A4.6 4.6 0 0129.611 20a4.563 4.563 0 014.295 2.967 3.835 3.835 0 012.487.332 4.56 4.56 0 011.884-.41c1.38 0 2.67.625 3.536 1.676a5.124 5.124 0 011.52-.231 5.344 5.344 0 015.255 4.413A5.34 5.34 0 0153 34a1 1 0 01-1 1zm-37.985-2h36.832a3.339 3.339 0 00-3.18-2.333 1 1 0 01-1-1 3.338 3.338 0 00-3.334-3.334c-.49 0-.979.118-1.453.352a1.002 1.002 0 01-1.32-.42c-.695-1.28-2.407-1.762-3.665-.969a1.002 1.002 0 01-1.124-.04 1.845 1.845 0 00-2.063-.092 1.004 1.004 0 01-1.513-.773A2.587 2.587 0 0029.611 22a2.602 2.602 0 00-2.563 2.153.997.997 0 01-1.2.803 2.684 2.684 0 00-.571-.067 2.587 2.587 0 00-2.584 2.392 1 1 0 01-1.511.773 1.847 1.847 0 00-.96-.275 1.891 1.891 0 00-1.888 1.85 1 1 0 01-1.193 1.092A2.612 2.612 0 0014.015 33z"
        transform="matrix(.31 0 0 .31 12 12) translate(.5 -4.5) translate(-32.5 -27.5)"
      ></path>
      <path
        fill="#C4939C"
        d="M58 55H6V32h52v23zm0-38s-.181-10-7.222-10H13.222C6 7 6 17 6 17h52z"
        transform="matrix(.31 0 0 .31 12 12) translate(0 -1) translate(-32 -31)"
      ></path>
      <path
        fill="#8D6C9F"
        d="M58 56H6a1 1 0 01-1-1V32a1 1 0 011-1h52a1 1 0 011 1v23a1 1 0 01-1 1zM7 54h50V33H7v21zm51-36h-4a1 1 0 110-2h2.93c-.245-2.369-1.334-8-6.152-8H13.222c-4.958 0-5.966 5.645-6.17 8H42a1 1 0 110 2H6a1 1 0 01-1-1c0-3.805 1.718-11 8.222-11h37.555c6.347 0 8.154 7.184 8.223 10.982A1 1 0 0158 18zm-8 0h-4a1 1 0 110-2h4a1 1 0 110 2z"
        transform="matrix(.31 0 0 .31 12 12) translate(0 -1) translate(-32 -31)"
      ></path>
      <path
        fill="#8D6C9F"
        d="M58 40H6a1 1 0 110-2h52a1 1 0 110 2z"
        transform="matrix(.31 0 0 .31 12 12) translate(0 7) translate(-32 -39)"
      ></path>
      <path
        fill="#EFC88E"
        d="M37 32v5.5c0 3.025-2.475 5.5-5.5 5.5S26 40.525 26 37.5V32h11zM6 55h9a9 9 0 00-9-9v9zm52-9a9 9 0 00-9 9h9v-9zM31.5 11c-3.025 0-5.5 2.7-5.5 6h11c0-3.3-2.475-6-5.5-6z"
        transform="matrix(.31 0 0 .31 12 12) translate(0 1) translate(-32 -33)"
      ></path>
      <path
        fill="#8D6C9F"
        d="M58 56h-9a1 1 0 01-1-1c0-5.514 4.486-10 10-10a1 1 0 011 1v9a1 1 0 01-1 1zm-7.938-2H57v-6.938A8.019 8.019 0 0050.062 54zM15 56H6a1 1 0 01-1-1v-9a1 1 0 011-1c5.514 0 10 4.486 10 10a1 1 0 01-1 1zm-8-2h6.938A8.019 8.019 0 007 47.062V54zm24.5-10a6.508 6.508 0 01-6.5-6.5V32a1 1 0 011-1h11a1 1 0 011 1v5.5c0 3.584-2.916 6.5-6.5 6.5zM27 33v4.5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5V33h-9zm10-15H26a1 1 0 01-1-1c0-3.859 2.916-7 6.5-7s6.5 3.141 6.5 7a1 1 0 01-1 1zm-9.91-2h8.819c-.418-2.279-2.236-4-4.409-4-2.173 0-3.991 1.721-4.41 4z"
        transform="matrix(.31 0 0 .31 12 12) translate(0 1) translate(-32 -33)"
      ></path>
      <path
        fill="#8D6C9F"
        d="M5.96 33a1.001 1.001 0 01-.89-1.454l4.07-7.979-4.011-6.013a1.001 1.001 0 011.664-1.11l4.336 6.5a1 1 0 01.059 1.009l-4.336 8.5A1 1 0 015.96 33z"
        transform="matrix(.31 0 0 .31 12 12) translate(-23.87 -7.5) translate(-8.13 -24.5)"
      ></path>
      <path
        fill="#8D6C9F"
        d="M58.001 33a1 1 0 01-.892-.546l-4.337-8.5a.998.998 0 01.059-1.009l4.337-6.5a1 1 0 011.664 1.11l-4.012 6.013 4.07 7.979A1 1 0 0158.001 33z"
        transform="matrix(.31 0 0 .31 12 12) translate(23.83 -7.5) translate(-55.83 -24.5)"
      ></path>
      <path
        fill="#8D6C9F"
        d="M31.5 40c-.825 0-1.5-.75-1.5-1.667v-1.667c0-.916.675-1.666 1.5-1.666s1.5.75 1.5 1.667v1.667C33 39.25 32.325 40 31.5 40z"
        transform="matrix(.31 0 0 .31 12 12) translate(-.5 5.5) translate(-31.5 -37.5)"
      ></path>
      <path
        fill="#8D6C9F"
        d="M22 46.017c-.552 0-1 .446-1 .996v1.992c0 .549.448.995 1 .995s1-.446 1-.996v-1.992a.998.998 0 00-1-.995zm-5 0c-.552 0-1 .446-1 .996v1.992c0 .549.448.995 1 .995s1-.446 1-.996v-1.992a.998.998 0 00-1-.995zm10 0c-.552 0-1 .446-1 .996v1.992c0 .549.448.995 1 .995s1-.446 1-.996v-1.992a.998.998 0 00-1-.995zm5 0c-.552 0-1 .446-1 .996v1.992c0 .549.448.995 1 .995s1-.446 1-.996v-1.992a.998.998 0 00-1-.995zm5 0c-.552 0-1 .446-1 .996v1.992c0 .549.448.995 1 .995s1-.446 1-.996v-1.992a.998.998 0 00-1-.995zm5 0c-.552 0-1 .446-1 .996v1.992c0 .549.448.995 1 .995s1-.446 1-.996v-1.992a.998.998 0 00-1-.995zM47 46a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z"
        transform="matrix(.31 0 0 .31 12 12) translate(0 16) translate(-32 -48)"
      ></path>
    </svg>
  );
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <TreasureIcon />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };