import React from "react";
import * as XMLParser from "react-xml-parser";

export const XmlParser: React.FC = (): JSX.Element => {
  const svg = new XMLParser().parseFromString(xmlText); // Assume xmlText contains the example XML
  const targetElement: any = {};
  const CircleButtonInit: any = {};
  svg.children.forEach((elm: any) => {
    // console.log(elm.attributes);
    elm.children.forEach((elm: any) => {
      if (
        elm.attributes.fill &&
        elm.attributes.fill !== "#000" &&
        elm.attributes.fill !== "none"
      ) {
        const id = elm.attributes.id;
        const source = { color: elm.attributes.fill, isComplete: false };
        targetElement[id] = source;

        CircleButtonInit[elm.attributes.fill] = {
          strokeWidth: 0,
          isComplete: false,
        };
      }
    });
  });
  console.log(targetElement);
  console.log(CircleButtonInit);

  return <main></main>;
};

const xmlText = `
  <g id="layer8" display="inline">
  <g
    id="layer2"
    stroke="#000"
    strokeDasharray="none"
    strokeLinecap="butt"
    strokeLinejoin="miter"
    strokeMiterlimit="4"
    strokeOpacity="1"
    display="inline"
  >
    <path
      id="path2268"
      fill="none"
      strokeWidth="1.3"
      d="M80.328 42.925c52.668-13.338 91.15 27.3 91.093 71.2-.104 79.123-35.92 70.672-72.235 72.308-22.924 1.033-51.777-4.872-56.744-31.68-2.9-15.652 1.16-16.935 2.91-39.785.81-10.553-3.64-20.3-1.875-31.968 1.46-9.651 3.132-14.114 13.326-26.075-2.661-4.685-3.252-15.726 3.295-19.207 6.044-3.214 14.022-1.417 20.23 5.207z"
      opacity="1"
    ></path>
    <path
      id="path2272"
      fill="#ffe6d5"
      strokeWidth="1.2"
      d="M63.69 52.79c1.608 1.035 3.459.124 5.532-1.1 1.665-.984 3.781-2.019 3.704-3.552-.16-3.178-6.255-5.169-8.913-3.42-2.248 1.481-2.586 6.614-.323 8.072z"
    ></path>
  </g>
  <g
    id="g878"
    stroke="#000"
    strokeDasharray="none"
    strokeMiterlimit="4"
    strokeOpacity="1"
    display="inline"
  >
    <path
      id="path870"
      fill="#ffd6d5"
      fillOpacity="1"
      strokeLinecap="butt"
      strokeLinejoin="round"
      strokeWidth="1.12"
      d="M172.666 94.317c4.36 17.761 5.044 30.864 6.31 38.61-26.418 3.91-49.157 1.296-73.12-3.29-20.879-3.997-34.687-7.68-60.263-20.862-1.247-1.933-1.108-5.364.63-6.872 18.415 3.657 39.758 4.04 59.632 2.977 22.515-1.205 49.101-5.684 66.811-10.563z"
    ></path>
    <path
      id="path874"
      fill="#ffd5d5"
      strokeLinecap="round"
      strokeLinejoin="miter"
      strokeWidth="1.2"
      d="M30.859 114.218c.504 2.797 5.06 3.48 7.89 3.23 3.853-.341 9.489-2.357 9.802-6.212.268-3.295-5.14-8.996-7.409-6.591-.015.016.049.025.048.048-.094 4.683-7.457 3.16-10.331 9.525z"
    ></path>
    <path
      id="path876"
      fill="#ffd5d5"
      strokeLinecap="round"
      strokeLinejoin="miter"
      strokeWidth="1.2"
      d="M28.686 102.442c4.824-4.505 6.314-5.547 9.922-5.996 3.26-.406 7.685.27 9.358 3.097 1.01 1.709.548 4.726-1.083 5.857-4.86 3.372-12.835.92-18.197-2.958z"
    ></path>
  </g>
  <g id="g888" display="inline">
    <ellipse
      id="path926"
      cx="47.808"
      cy="104.598"
      fill="#ffd5d5"
      stroke="#000"
      strokeWidth="1"
      display="inline"
      rx="4.727"
      ry="8.127"
    ></ellipse>
  </g>
  <g
    id="layer9"
    fill="#ffffd5"
    fillOpacity="1"
    stroke="none"
    strokeDasharray="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit="4"
    strokeOpacity="1"
    display="inline"
  >
    <ellipse
      id="path3179"
      cx="160.462"
      cy="111.717"
      strokeWidth="1.2"
      rx="4.347"
      ry="3.402"
    ></ellipse>
    <ellipse
      id="path3181"
      cx="150.634"
      cy="127.592"
      strokeWidth="1.2"
      rx="3.213"
      ry="2.646"
    ></ellipse>
    <ellipse
      id="path3183"
      cx="93.445"
      cy="113.439"
      strokeWidth="0.8"
      rx="2.72"
      ry="2.478"
    ></ellipse>
    <ellipse
      id="path3185"
      cx="103.484"
      cy="125.55"
      strokeWidth="1.2"
      rx="2.646"
      ry="1.89"
    ></ellipse>
    <ellipse
      id="path3189"
      cx="56.707"
      cy="108.693"
      strokeWidth="1.2"
      rx="2.457"
      ry="1.89"
    ></ellipse>
    <ellipse
      id="path3191"
      cx="171.517"
      cy="127.876"
      strokeWidth="1.5"
      rx="2.362"
      ry="1.795"
    ></ellipse>
  </g>
  <g id="g1249" display="inline">
    <path
      id="path1255"
      fill="#ff8080"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="1.2"
      d="M135.027 31.915s2.696-9.988 8.553-8.419c4.68 1.254-2.192 7.702-3.475 11.493-.244.72-.802 2.138-.802 2.138"
    ></path>
  </g>
  <g id="g864" display="inline">
    <path
      id="path852"
      fill="#ff8080"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="1.3"
      d="M128.388 49.276c-7.1-2.997-17.16-1.19-24.782-5.405-3.07-1.698-3.418-5.795-1.605-8.8 6.515-10.797 26.313-8.878 38.136-4.49 8.275 3.07 14.926 10.736 17.84 19.067 1.386 3.961 1.42 9.837-1.494 12.857-1.873 1.942-5.63 1.947-8.058.77-7.896-3.825-12.53-10.831-20.037-14z"
    ></path>
  </g>
  <g id="layer5">
    <path
      id="path890"
      fill="#0096ff"
      fillOpacity="1"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="round"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="1.2"
      d="M66.724 107.748l-5.481 16.82 8.882 22.49 18.332-6.804-7.56-24.001z"
    ></path>
  </g>
  <g
    id="layer6"
    fill="#fff"
    stroke="#000"
    strokeDasharray="none"
    strokeLinecap="round"
    strokeMiterlimit="4"
    strokeOpacity="1"
    strokeWidth="1.5"
  >
    <path
      id="path892"
      strokeLinejoin="miter"
      d="M55.762 141.2s13.322.985 12.473-7.75c-.705-7.26-11.906-7.37-11.906-7.37v0"
    ></path>
    <path
      id="path894"
      strokeLinejoin="round"
      d="M97.895 142.522s-14.939.337-15.107-8.693c-.084-4.458 4.224-6.169 7.05-6.81 1.375-.312 0 0 0 0"
    ></path>
  </g>
  <g id="layer7" display="inline">
    <ellipse
      id="path1179"
      cx="138.634"
      cy="113.701"
      fill="#000"
      strokeDasharray="none"
      strokeLinejoin="round"
      strokeMiterlimit="4"
      strokeWidth="1.2"
      rx="1.984"
      ry="1.606"
    ></ellipse>
    <ellipse
      id="path1181"
      cx="118.884"
      cy="114.93"
      fill="#000"
      strokeDasharray="none"
      strokeLinejoin="round"
      strokeMiterlimit="4"
      strokeWidth="1.518"
      rx="2.079"
      ry="1.512"
    ></ellipse>
    <ellipse
      id="path1183"
      cx="104.616"
      cy="84.219"
      fill="#000"
      strokeDasharray="none"
      strokeLinejoin="round"
      strokeMiterlimit="4"
      strokeWidth="1.2"
      rx="2.929"
      ry="2.362"
    ></ellipse>
    <ellipse
      id="path1185"
      cx="62.849"
      cy="83.841"
      fill="#000"
      strokeDasharray="none"
      strokeLinejoin="round"
      strokeMiterlimit="4"
      strokeWidth="1.2"
      rx="3.307"
      ry="2.551"
    ></ellipse>
    <ellipse
      id="path1187"
      cx="79.48"
      cy="93.291"
      fill="#000"
      strokeDasharray="none"
      strokeLinejoin="round"
      strokeMiterlimit="4"
      strokeWidth="1.2"
      rx="6.142"
      ry="4.252"
    ></ellipse>
    <path
      id="path1193"
      fill="#000"
      stroke="#000"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeOpacity="1"
      strokeWidth="0.25"
      d="M124.554 120.95c-.494 1.563 3.553 1.257 5.386 1.184 1.833-.072 4.823-.07 4.252-1.522-.57-1.451-2.742-.197-4.44-.17-1.7.029-4.704-1.054-5.198.508z"
    ></path>
    <path
      id="path1197"
      fill="none"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="round"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="1.2"
      d="M38.833 101.762l4.346.19"
    ></path>
    <path
      id="path1237"
      fill="none"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="1"
      d="M64.2 116.372l10.424-3.474"
    ></path>
    <path
      id="path1239"
      fill="none"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="round"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="1"
      d="M62.446 122.03l18.452-5.777"
    ></path>
    <path
      id="path1243"
      fill="none"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="round"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="1.5"
      d="M70.481 169.693s8.634 4.187 6.281 10.156c-3.246 8.237-14.7.267-14.7.267"
    ></path>
    <path
      id="path1245"
      fill="none"
      stroke="#000"
      strokeDasharray="none"
      strokeLinecap="round"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="1.5"
      d="M99.08 171.163s-9.507 1.558-9.622 7.35c-.144 7.232 6.548 7.75 6.548 7.75"
    ></path>
  </g>
  <g
    id="layer3"
    fill="#000"
    fillOpacity="1"
    stroke="none"
    display="inline"
    fontFamily="sans-serif"
    fontStyle="normal"
    fontWeight="normal"
    letterSpacing="0"
    wordSpacing="0"
  >
    <g
      
      id="text888"
      strokeWidth="0.265"
      ariaLabel="1"
      fontSize="10.583"
    >
      <path
        id="path1006"
        strokeWidth="0.265"
        d="M129.268 42.803h1.706v-5.886l-1.856.372v-.95l1.845-.373h1.044v6.837h1.705v.878h-4.444z"
      ></path>
    </g>
    <g
      
      id="text892"
      strokeWidth="0.214"
      ariaLabel="2"
      fontSize="8.542"
    >
      <path
        id="path964"
        strokeWidth="0.214"
        d="M128.726 111.096h2.94v.709h-3.953v-.71q.48-.496 1.305-1.33.83-.838 1.043-1.08.405-.455.563-.768.163-.317.163-.621 0-.496-.35-.81-.347-.312-.906-.312-.396 0-.838.138-.438.137-.938.417v-.851q.508-.205.95-.309.443-.104.81-.104.967 0 1.543.484.575.484.575 1.293 0 .383-.146.73-.141.342-.52.809-.105.12-.664.7-.559.576-1.577 1.615z"
      ></path>
    </g>
    <g
      
      id="text896"
      strokeWidth="0.093"
      ariaLabel="3"
      fontSize="3.708"
    >
      <path
        id="path1003"
        strokeWidth="0.093"
        d="M160.833 111.442q.262.056.409.234.148.177.148.438 0 .4-.275.619-.275.22-.782.22-.17 0-.351-.035-.18-.033-.371-.1v-.353q.152.089.333.134.18.045.378.045.344 0 .523-.135.181-.136.181-.395 0-.24-.168-.373-.167-.136-.465-.136h-.315v-.3h.33q.269 0 .412-.107.143-.109.143-.312 0-.208-.148-.318-.147-.113-.422-.113-.15 0-.323.033-.172.033-.378.101v-.325q.208-.058.39-.087.182-.03.343-.03.417 0 .66.19.242.189.242.511 0 .225-.129.38-.128.154-.365.214z"
      ></path>
    </g>
    <g
      
      id="text896-3"
      strokeWidth="0.063"
      ariaLabel="3"
      display="inline"
      fontSize="2.527"
    >
      <path
        id="path1000"
        strokeWidth="0.063"
        d="M172.084 127.802q.179.038.279.16.101.12.101.298 0 .273-.188.422-.187.15-.532.15-.116 0-.24-.024-.122-.023-.253-.068v-.24q.104.06.227.09.124.031.258.031.235 0 .357-.092.123-.093.123-.27 0-.162-.115-.253-.113-.093-.317-.093h-.214v-.205h.224q.184 0 .281-.072.098-.074.098-.213 0-.141-.101-.217-.1-.076-.288-.076-.102 0-.22.022-.117.022-.257.069v-.222q.142-.04.265-.06.125-.019.234-.019.284 0 .45.13.165.128.165.348 0 .153-.088.259-.087.104-.249.145z"
      ></path>
    </g>
    <g
      
      id="text896-3-3"
      strokeWidth="0.063"
      ariaLabel="3"
      display="inline"
      fontSize="2.527"
    >
      <path
        id="path997"
        strokeWidth="0.063"
        d="M151.012 127.424q.179.038.279.16.1.12.1.298 0 .273-.187.422-.187.15-.533.15-.116 0-.239-.024-.122-.022-.253-.068v-.24q.104.06.227.09.123.031.258.031.234 0 .356-.092.124-.093.124-.27 0-.162-.115-.253-.113-.093-.317-.093h-.215v-.205h.225q.184 0 .281-.072.098-.074.098-.213 0-.141-.101-.217-.1-.076-.288-.076-.102 0-.22.022-.117.022-.257.07v-.223q.142-.04.265-.06.124-.019.234-.019.284 0 .45.13.165.128.165.348 0 .153-.088.259-.087.104-.25.145z"
      ></path>
    </g>
    <g
      
      id="text896-3-8"
      strokeWidth="0.063"
      ariaLabel="3"
      display="inline"
      fontSize="2.527"
    >
      <path
        id="path994"
        strokeWidth="0.063"
        d="M103.897 125.44q.179.038.279.159.101.12.101.299 0 .272-.187.421-.188.15-.533.15-.116 0-.24-.024-.122-.022-.253-.068v-.24q.104.06.227.091.124.031.258.031.235 0 .357-.093.123-.092.123-.268 0-.163-.115-.255-.113-.092-.317-.092h-.214v-.205h.224q.184 0 .281-.073.098-.074.098-.212 0-.142-.101-.217-.1-.077-.288-.077-.102 0-.22.023-.116.022-.257.069v-.222q.142-.04.265-.06.125-.02.235-.02.283 0 .449.13.165.129.165.348 0 .153-.088.26-.087.104-.249.145z"
      ></path>
    </g>
    <g
      
      id="text896-3-34"
      strokeWidth="0.063"
      ariaLabel="3"
      display="inline"
      fontSize="2.527"
    >
      <path
        id="path991"
        strokeWidth="0.063"
        d="M93.692 113.44q.179.037.279.158.1.121.1.299 0 .272-.187.422-.187.149-.533.149-.116 0-.24-.023-.121-.023-.252-.068v-.24q.104.06.227.09.123.031.258.031.234 0 .356-.092.124-.093.124-.27 0-.162-.115-.253-.113-.093-.317-.093h-.215v-.205h.225q.184 0 .281-.072.098-.074.098-.213 0-.142-.102-.217-.1-.076-.287-.076-.102 0-.22.022-.117.022-.258.069v-.222q.142-.04.266-.06.124-.019.234-.019.284 0 .45.13.165.128.165.347 0 .153-.088.26-.088.104-.25.145z"
      ></path>
    </g>
    <g
      
      id="text896-3-0"
      strokeWidth="0.063"
      ariaLabel="3"
      display="inline"
      fontSize="2.527"
    >
      <path
        id="path988"
        strokeWidth="0.063"
        d="M57.028 108.62q.179.038.279.159.101.12.101.299 0 .272-.187.421-.188.15-.533.15-.116 0-.24-.024-.122-.022-.253-.068v-.24q.104.06.227.091.124.031.258.031.235 0 .357-.092.123-.093.123-.27 0-.162-.115-.254-.113-.092-.317-.092h-.214v-.205h.224q.184 0 .281-.073.098-.074.098-.212 0-.142-.101-.217-.1-.076-.288-.076-.102 0-.22.022-.117.022-.257.069v-.222q.142-.04.265-.06.125-.02.234-.02.284 0 .45.13.165.129.165.348 0 .153-.088.26-.087.104-.249.145z"
      ></path>
    </g>
    <g
      
      id="text1018"
      strokeWidth="0.074"
      ariaLabel="2"
      fontSize="2.971"
    >
      <path
        id="path985"
        strokeWidth="0.074"
        d="M39.022 113.542h1.023v.247H38.67v-.247q.166-.172.454-.462.288-.292.362-.376.14-.158.196-.267.057-.11.057-.216 0-.173-.122-.281-.12-.11-.315-.11-.138 0-.292.049-.152.048-.326.145v-.296q.177-.071.33-.108.154-.036.282-.036.337 0 .537.168.2.169.2.45 0 .134-.05.254-.05.119-.182.281-.036.042-.23.244l-.549.561z"
      ></path>
    </g>
    <g
      
      id="text892-1"
      strokeWidth="0.093"
      ariaLabel="2"
      display="inline"
      fontSize="3.713"
    >
      <path
        id="path982"
        strokeWidth="0.093"
        d="M47.31 105.971h1.279v.308H46.87v-.308q.209-.216.568-.578.36-.365.453-.47.176-.197.245-.333.07-.138.07-.27 0-.216-.152-.352-.15-.136-.393-.136-.173 0-.365.06-.19.06-.408.18v-.369q.222-.089.414-.134.192-.045.351-.045.421 0 .671.21.25.21.25.562 0 .167-.063.317-.062.149-.227.352-.045.052-.288.304l-.685.702z"
      ></path>
    </g>
    <g
      
      id="text892-1-0"
      strokeWidth="0.078"
      ariaLabel="2"
      display="inline"
      fontSize="3.135"
    >
      <path
        id="path979"
        strokeWidth="0.078"
        d="M36.412 102.893h1.08v.26H36.04v-.26q.176-.182.48-.488.304-.308.382-.397.148-.167.207-.281.06-.117.06-.228 0-.183-.13-.297-.126-.115-.331-.115-.146 0-.308.05-.16.05-.345.153v-.312q.187-.075.35-.113.162-.039.296-.039.356 0 .567.178.211.178.211.475 0 .14-.053.268-.053.125-.192.296-.038.045-.243.258l-.579.592z"
      ></path>
    </g>
    <g
      
      id="text1066"
      strokeWidth="0.101"
      ariaLabel="4"
      fontSize="4.043"
    >
      <path
        id="path976"
        strokeWidth="0.101"
        d="M67.117 47.377l-1.007 1.574h1.007zm-.105-.347h.502v1.92h.42v.332h-.42v.695h-.397v-.695h-1.33v-.385z"
      ></path>
    </g>
    <g
      
      id="text1074"
      strokeWidth="0.063"
      ariaLabel="4"
      fontSize="2.534"
    >
      <path
        id="path973"
        strokeWidth="0.063"
        d="M68.224 111.14l-.631.987h.63zm-.066-.217h.315v1.204h.263v.208h-.263v.435h-.25v-.436h-.833v-.24z"
      ></path>
    </g>
    <g
      
      id="text1074-8"
      strokeWidth="0.063"
      ariaLabel="4"
      display="inline"
      fontSize="2.534"
    >
      <path
        id="path970"
        strokeWidth="0.063"
        d="M70.509 116.335l-.631.986h.63zm-.066-.218h.314v1.204h.264v.207h-.264v.436h-.248v-.436h-.834v-.24z"
      ></path>
    </g>
    <g
      
      id="text1074-8-0"
      strokeWidth="0.146"
      ariaLabel="4"
      display="inline"
      fontSize="5.833"
    >
      <path
        id="path967"
        strokeWidth="0.146"
        d="M74.594 129.148l-1.453 2.27h1.453zm-.151-.502h.723v2.772h.607v.478h-.607v1.003h-.572v-1.003h-1.92v-.555z"
      ></path>
    </g>
  </g>
  <g id="layer4" display="inline">
    <path
      id="rect1117"
      fill="none"
      stroke="#000"
      strokeDasharray="none"
      strokeMiterlimit="4"
      strokeWidth="1"
      d="M1.194 1.019H210.49499999999998V210.32H1.194z"
    ></path>
  </g>
</g>
`;
