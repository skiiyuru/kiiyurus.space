import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, a as renderComponent, u as unescapeHTML, F as Fragment, g as renderHead, f as renderScript, e as renderSlot } from './astro/server_B9k6C6bM.mjs';
import 'kleur/colors';
/* empty css                          */
import { getIconData, iconToSVG } from '@iconify/utils';
import 'clsx';
import { b as baseData, s as socialData } from './siteData_CYaQy5Ia.mjs';

function extractSegmentURL(path) {
  if (!path) return "";
  if (path === "/") return null;
  return path.split("/")[1];
}

const icons = {"local":{"prefix":"local","lastModified":1738087599,"icons":{"award":{"body":"<path fill=\"currentColor\" d=\"M18 4V2H6v2H1v5h1v2h1v1h1v1h1v1h1v1h3v1h2v3H7v3h10v-3h-4v-3h2v-1h3v-1h1v-1h1v-1h1v-1h1V9h1V4h-5ZM8 13H6v-1H5v-1H4V9H3V6h2v1h1v2h1v3h1v1Zm0-4V4h8v5h-1v3h-1v2h-4v-2H9V9H8Zm12 0v2h-1v1h-1v1h-2v-1h1v-2h1V7h1V6h2v3h-1Z\"/>"},"blender":{"body":"<path fill=\"currentColor\" d=\"M12.427 13.011c.037-.667.363-1.254.856-1.671a2.855 2.855 0 0 1 1.844-.66c.71 0 1.36.25 1.845.66.492.417.819 1.005.856 1.671.038.686-.237 1.323-.721 1.795a2.829 2.829 0 0 1-1.979.782 2.83 2.83 0 0 1-1.981-.782c-.483-.472-.759-1.109-.72-1.795\"/><path fill=\"currentColor\" d=\"M8.124 14.361c.005.26.089.767.213 1.164a6.156 6.156 0 0 0 1.328 2.299 6.833 6.833 0 0 0 2.323 1.667 7.465 7.465 0 0 0 3.05.635 7.495 7.495 0 0 0 3.051-.645 6.913 6.913 0 0 0 2.321-1.675 6.196 6.196 0 0 0 1.326-2.303 5.76 5.76 0 0 0 .25-1.285 5.942 5.942 0 0 0-.888-3.594 6.496 6.496 0 0 0-1.545-1.703l.001-.001-6.249-4.799-.016-.014c-.411-.314-1.101-.313-1.551.002-.457.319-.508.846-.104 1.18l-.001.001 2.606 2.121-7.943.009h-.012c-.656 0-1.287.432-1.412.976-.128.555.318 1.015 1.001 1.017l-.001.003 4.027-.008-7.188 5.516-.027.021c-.677.519-.896 1.382-.47 1.929.434.556 1.354.556 2.04.002l3.922-3.209c.001 0-.056.433-.052.694m10.078 1.45c-.808.824-1.938 1.291-3.163 1.293-1.226.002-2.356-.461-3.165-1.283a3.739 3.739 0 0 1-.864-1.352 3.503 3.503 0 0 1-.199-1.511c.044-.505.193-.987.434-1.422.236-.429.562-.815.962-1.144a4.477 4.477 0 0 1 2.832-.988 4.478 4.478 0 0 1 2.832.98c.399.326.725.711.961 1.139.24.436.39.916.434 1.421a3.52 3.52 0 0 1-.198 1.511 3.804 3.804 0 0 1-.866 1.356\"/>"},"close":{"body":"<path fill=\"currentColor\" d=\"m12 10.587 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.415 1.414-4.95-4.95-4.949 4.95-1.414-1.415 4.95-4.95-4.95-4.95L7.05 5.638z\"/>"},"design":{"body":"<path fill=\"currentColor\" d=\"M19 11v-1h1V9h1V8h1V7h1V4h-1V3h-1V2h-1V1h-3v1h-1v1h-1v1h-1v1h-1v1h-2V5h-1V4H9V3H8V2H7V1H5v1H4v1H3v1H2v1H1v2h1v1h1v1h1v1h1v1h1v2H5v1H4v1H3v1H2v1H1v6h6v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1v-1h-1v-1h-1v-1h-1v-2h1ZM7 10V9H6V8H5V7H4V5h1V4h2v1h1v1H7v1h1v1h1V7h1v2H9v1H7Zm6 3v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H3v-3h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1v1h1v1h1v1h-1v1h-1v1h-1v1h-1Zm6 3v1h1v2h-1v1h-2v-1h-1v-1h-1v-1h-1v-2h1v-1h2v1h-1v1h1v1h1v-1h1Zm-2-9V6h-1V5h1V4h1V3h1v1h1v1h1v1h-1v1h-1v1h-1V7h-1Z\"/>"},"external-link":{"body":"<g fill=\"currentColor\"><path d=\"M20 15v7h-1v1H2v-1H1V5h1V4h9v2H3v15h15v-6h2Z\"/><path d=\"M23 1v8h-2V5h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H7v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h-4V1h8Z\"/></g>"},"face":{"body":"<path fill=\"currentColor\" d=\"M251.47 19.188c-38.454 1.225-74.12 17.995-102.876 44.874h143.25L251.5 19.188zM277 20.625l106.156 118.03a9.007 9.007 0 0 1 .656.814h31.625C389.93 75.593 337.993 29.355 277 20.624zM131.594 82.063c-13.968 16.764-25.626 36.19-34.344 57.406h262.406L308.03 82.062H131.595zm290.125 75.124a9 9 0 0 1-2.314.282H92.594a9 9 0 0 1-1.844-.157 234.927 234.927 0 0 0-6.156 23.53c10.116-3.31 20.786-4.79 30.562-4.78 28.234.03 58.968 1.987 82.875 12.5 8.163 3.59 15.634 8.29 21.626 14.437h72.688c5.992-6.146 13.463-10.848 21.625-14.438 23.906-10.512 54.64-12.47 82.874-12.5 9.866-.01 20.644 1.5 30.844 4.875a236.45 236.45 0 0 0-5.97-23.75zm-303.25 36.875c-7.975.024-14.797.522-19.157 1.594-12.054 36.836-.837 77.202 8.218 112.72.656.762 11.178 4.697 19.282 4.53-7.954-23.88 13.606-98.775 35.344-115.53-13.86-2.1-30.398-3.353-43.687-3.314m271.436.063c-21.518.234-46.257 2.96-58.812 7.28-12.053 36.837-1.15 70.11 7.906 105.626.655.765 11.052 5.23 19.156 5.064-7.954-23.882 14.262-101.213 36-117.97-1.402-.006-2.814-.015-4.25 0m-156.375 38.78c.71 6.47.392 13.46-1.03 20.907-2.746 14.383-7.356 26.488-13.344 36.5h73.688c-5.988-10.012-10.598-22.117-13.344-36.5-1.422-7.447-1.74-14.438-1.03-20.906h-44.94zm-28.81 75.407a76.108 76.108 0 0 1-11.282 8.72c-18.483 11.666-40 14.714-59.844 14.343-16.54-.31-30.828-4.272-42.78-10.72 3.945 15.8 8.843 30.875 14.624 45.064h301.125c5.777-14.182 10.68-29.272 14.625-45.064-11.954 6.447-26.243 10.41-42.782 10.72-19.844.37-41.36-2.678-59.844-14.345a75.833 75.833 0 0 1-11.28-8.717H204.718zm-91.282 75.407c5.733 11.796 12.095 22.846 19 33.03 6.078 8.966 12.546 17.27 19.375 24.813a9 9 0 0 1 2.718-.407h202.94a9 9 0 0 1 2.717.375c6.823-7.537 13.3-15.82 19.375-24.78 6.905-10.184 13.267-21.234 19-33.03zm94.718 18.842a9 9 0 0 1 .625 0h94.44a9 9 0 1 1 0 18h-94.44a9.005 9.005 0 0 1-.624-18zM170 459.156c25.64 21.635 54.99 33.72 86 33.72 31.01 0 60.36-12.085 86-33.72z\"/>","width":512,"height":512},"github":{"body":"<path fill=\"currentColor\" d=\"M23 9v6h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-1v-5h-1v-1h1v-1h2v-1h1v-1h1V9h-1V6h-2v1h-1v1h-1V7h-4v1H9V7H8V6H6v3H5v5h1v1h1v1h2v2H7v-1H6v-1H4v1h1v2h1v1h3v3H8v-1H6v-1H5v-1H4v-1H3v-2H2v-2H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h1v1h1v2h1v2h1Z\"/>"},"glsl":{"body":"<path fill=\"currentColor\" d=\"M7.779 18.923A2.333 2.333 0 0 1 5.4 17.16c.306 1.462 1.961 2.892 7.183 3.529a14.228 14.228 0 0 0 9.232-1.612s.733-.322.293.176c0 0-3.107 2.873-9.2 2.9S1.97 19.107 2 16c-.029-3.107 4.806-6.185 10.9-6.155s9.2 2.9 9.2 2.9c.44.5-.293.176-.293.176-1.084-.7-4.286-2.089-9.232-1.612-4.866.469-6.453 2.122-6.981 3.235a3.254 3.254 0 0 0-.318 1.24 2.424 2.424 0 0 1 2.5-2.316 2.507 2.507 0 0 1 2.524 2.727 2.506 2.506 0 0 1-2.521 2.725Zm19.647-1.074H30v.937h-3.656v-5.177h1.082zM23.454 16h2.163v2.791H24.9l-.108-.649a1.9 1.9 0 0 1-1.614.786 2.414 2.414 0 0 1-2.379-2.711 2.485 2.485 0 0 1 2.531-2.74 2.053 2.053 0 0 1 2.27 1.74h-1.085a1.136 1.136 0 0 0-1.132-.851c-.771 0-1.485.534-1.485 1.86 0 1.413.771 1.781 1.506 1.781a1.28 1.28 0 0 0 1.254-1.139h-1.2V16ZM7.781 14.1a1.86 1.86 0 0 0-1.8 2.105 1.86 1.86 0 0 0 1.8 2.105 1.86 1.86 0 0 0 1.8-2.105 1.86 1.86 0 0 0-1.8-2.105m2.911 1.383h.525v.468h.013a1.12 1.12 0 0 1 .987-.563 1.565 1.565 0 0 1 1.506 1.677 1.675 1.675 0 0 1-1.583 1.824 1 1 0 0 1-.88-.443h-.013V20.1h-.557v-4.621ZM12.1 18.4c.608 0 1.019-.527 1.019-1.254 0-.424-.171-1.264-1.032-1.264-.8 0-.893.867-.893 1.406 0 .88.551 1.114.905 1.114Zm5-.652a1.378 1.378 0 0 1-1.488 1.133 1.487 1.487 0 0 1-1.482-1.658c0-1.025.494-1.842 1.588-1.842.956 0 1.424.76 1.424 1.931h-2.421c0 .69.323 1.089.962 1.089a.841.841 0 0 0 .854-.652zm-.59-.88c-.032-.513-.247-.987-.924-.987a.972.972 0 0 0-.918.987zm3.713 1.917h-.557v-2.034c0-.576-.165-.867-.709-.867-.317 0-.874.2-.874 1.1v1.8h-.557v-3.305h.525v.468h.013a1.2 1.2 0 0 1 1-.563 1.046 1.046 0 0 1 1.158 1.152v2.253\"/>","width":32,"height":32},"linkedin":{"body":"<path fill=\"currentColor\" d=\"M22 2V1H2v1H1v20h1v1h20v-1h1V2h-1Zm-9 10v8h-3V9h3v1h1V9h4v1h1v10h-3v-8h-3ZM4 8V5h3v3H4Zm3 1v11H4V9h3Z\"/>"},"material":{"body":"<path fill=\"currentColor\" d=\"M.2 68.6V13.4L48 41v18.4L16.1 41v36.8zM48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4z\"/><path fill=\"currentColor\" d=\"M48 77.8v18.4l32 18.4V96.2zm32 36.8L127.8 87V50.2l-16 9.2v18.4L80 96.2zM111.9 41V22.6l16-9.2v18.4z\"/>","width":128,"height":128},"memory-cube":{"body":"<path fill=\"currentColor\" d=\"M12 21h-2v-1H8v-1H6v-1H4v-1H2V5h2V4h2V3h2V2h2V1h2v1h2v1h2v1h2v1h2v12h-2v1h-2v1h-2v1h-2m0-10V9h2V8h2V7h2V6h-2V5h-2V4h-2V3h-2v1H8v1H6v1H4v1h2v1h2v1h2v1m0 8v-7H8v-1H6V9H4v7h2v1h2v1m6 0v-1h2v-1h2V9h-2v1h-2v1h-2v7Z\"/>","width":22,"height":22},"react":{"body":"<g fill=\"none\"><g clip-path=\"url(#a)\"><path fill=\"currentColor\" d=\"M12.358 10.003a1.863 1.863 0 1 1-3.726 0 1.863 1.863 0 0 1 3.726 0Zm2.207-8.908c-1.122 0-2.59.8-4.073 2.185C9.008 1.903 7.54 1.112 6.419 1.112a1.83 1.83 0 0 0-.921.231c-1.146.661-1.403 2.72-.811 5.305C2.15 7.43.5 8.683.5 10.003c0 1.325 1.658 2.581 4.203 3.359-.587 2.594-.325 4.656.823 5.316.267.156.575.23.918.23 1.121 0 2.59-.8 4.074-2.187C12 18.099 13.469 18.89 14.59 18.89c.342 0 .652-.075.922-.23 1.145-.66 1.402-2.718.81-5.303 2.528-.777 4.178-2.032 4.178-3.354 0-1.325-1.658-2.58-4.203-3.36.587-2.591.325-4.655-.823-5.316a1.803 1.803 0 0 0-.909-.232Zm-.004.908v.005c.187 0 .338.037.465.106.555.319.796 1.53.608 3.087-.045.383-.118.787-.208 1.2a19.563 19.563 0 0 0-2.59-.445 19.916 19.916 0 0 0-1.695-2.04c1.326-1.233 2.572-1.91 3.42-1.912Zm-8.142.017c.844 0 2.095.673 3.425 1.9-.571.6-1.141 1.28-1.683 2.035-.874.09-1.741.239-2.594.448-.09-.39-.16-.785-.212-1.183-.192-1.557.045-2.767.595-3.09.158-.074.333-.106.47-.11Zm4.069 2.542c.379.39.758.826 1.133 1.303a24.673 24.673 0 0 0-1.121-.028c-.383 0-.762.008-1.133.028a15.65 15.65 0 0 1 1.12-1.303ZM10.5 6.75c.617 0 1.23.028 1.835.078a22.018 22.018 0 0 1 1.834 3.171 22.664 22.664 0 0 1-.844 1.625 21.23 21.23 0 0 1-.983 1.558 21.375 21.375 0 0 1-3.677.005 22.22 22.22 0 0 1-.986-1.55 20.892 20.892 0 0 1-.848-1.622c.257-.555.539-1.098.844-1.628.317-.55.644-1.072.983-1.557a21.037 21.037 0 0 1 1.842-.082v.002Zm-3.03.212a22.259 22.259 0 0 0-1.115 1.945 17.259 17.259 0 0 1-.563-1.623 20.348 20.348 0 0 1 1.679-.322Zm6.05 0c.58.086 1.138.191 1.673.322a17.88 17.88 0 0 1-.55 1.611 21.634 21.634 0 0 0-1.121-1.933h-.001Zm2.553.562c.404.125.787.264 1.146.415 1.444.617 2.377 1.424 2.377 2.063-.004.64-.938 1.45-2.381 2.063-.35.15-.733.285-1.13.41a19.973 19.973 0 0 0-.916-2.482c.375-.848.675-1.675.904-2.47v.001Zm-11.162.004c.232.8.537 1.63.917 2.483a19.28 19.28 0 0 0-.905 2.47 11.822 11.822 0 0 1-1.142-.417c-1.444-.614-2.377-1.421-2.377-2.062 0-.64.934-1.451 2.377-2.063.35-.15.733-.285 1.13-.411Zm9.732 3.566c.22.548.408 1.094.563 1.624-.534.13-1.097.241-1.68.325.406-.63.778-1.28 1.117-1.949Zm-8.288.017a20.108 20.108 0 0 0 1.121 1.932 18.356 18.356 0 0 1-1.672-.322c.15-.525.338-1.069.55-1.611h.001Zm9.078 2.489c.094.41.167.807.212 1.186.192 1.557-.045 2.766-.595 3.09a.896.896 0 0 1-.47.107c-.842 0-2.094-.673-3.424-1.9.571-.6 1.141-1.28 1.683-2.034a18.995 18.995 0 0 0 2.594-.449Zm-9.858.008c.8.195 1.672.346 2.59.444.55.754 1.12 1.439 1.695 2.038-1.33 1.236-2.577 1.913-3.425 1.913a.987.987 0 0 1-.46-.11c-.556-.317-.797-1.529-.61-3.086a12.5 12.5 0 0 1 .21-1.199Zm3.8.534c.367.016.742.028 1.12.028.384 0 .763-.008 1.134-.028-.367.476-.746.912-1.12 1.304-.38-.392-.759-.828-1.134-1.304Z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M.5 0h20v20H.5z\"/></clipPath></defs></g>","width":21,"height":20},"rss":{"body":"<path fill=\"currentColor\" d=\"M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20 5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27zm0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93z\"/>"},"speed":{"body":"<path fill=\"currentColor\" d=\"M14 10V6h1V3h1V1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v1h7v4H9v3H8v2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-7Zm4 2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-5H6v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1v5h5v1Z\"/>"},"tailwind":{"body":"<g fill=\"none\"><g clip-path=\"url(#a)\"><path fill=\"currentColor\" d=\"M10.501 4c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.76.19 1.304.742 1.907 1.353.98.995 2.115 2.147 4.593 2.147 2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.76-.19-1.304-.742-1.907-1.353C14.114 5.152 12.98 4 10.501 4Zm-5 6c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.76.19 1.304.742 1.907 1.353C6.888 14.848 8.023 16 10.5 16c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.76-.19-1.304-.742-1.907-1.353C9.114 11.152 7.98 10 5.501 10Z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M.5 0h20v20H.5z\"/></clipPath></defs></g>","width":21,"height":20},"three":{"body":"<path fill=\"currentColor\" d=\"M.087 3.585C-.446 1.427 1.555-.5 3.691.116l62.23 17.916a2.94 2.94 0 0 1 1.578.455l122.73 35.334c.508.01 1.01.155 1.446.416l62.234 17.918c2.138.616 2.807 3.316 1.203 4.858l-187.8 180.649c-1.603 1.542-4.274.77-4.807-1.39L31.353 130.16a2.948 2.948 0 0 1-.098-.396Zm53.306 191.71 13.52 54.733 40.714-39.165zm41.938-43.284-39.419 37.995 52.512 15.076zm5.851-.406 13.052 52.903 39.311-37.814zm-63.07-18.174 13.109 53.073 39.372-37.95zm103.704-26.278-40.051 38.606 53.373 15.38zm5.612-1.373 13.322 53.984 40.161-38.631zM79.847 89.239l-40.137 38.64 53.471 15.407zm5.59-1.457 13.094 53.07 39.419-37.996zM22.385 69.759 35.71 123.71l40.108-38.612zm166.192-7.49-39.419 37.995 52.512 15.076zm5.633-1.29 13.28 53.826 40.008-38.484zm-67.86-16.506L87.109 82.25l52.265 15.003zm5.601-1.419 13.112 53.134 39.43-38.007zM64.338 26.48 24.919 64.476 77.431 79.55zm5.638-1.269 13.061 52.937 39.323-37.855zM6.894 7.05l13.323 53.935 40.022-38.577z\"/>","width":256,"height":259},"twitter":{"body":"<path fill=\"currentColor\" d=\"M15.5 10V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h-3v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2V7h-1V6h-1V4h-1V3h-1V2h-7v1h1v1h1v1h1v2h1v1h1v2h1v1h1v2h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h2v1h1v1h1v2h1v1h1v1h7v-1h-1v-1h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h-1v-2h-1v-1h1Zm0 4v1h1v2h1v1h1v2h-3v-2h-1v-1h-1v-1h-1v-2h-1v-1h-1v-1h-1v-2h-1V9h-1V7h-1V6h-1V4h3v1h1v2h1v1h1v2h1v1h1v1h1v2h1Z\"/>"}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$3 = createAstro("https://kiiyurus.space");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/node_modules/astro-icon/components/Icon.astro", undefined);

const $$Astro$2 = createAstro("https://kiiyurus.space");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, icon, title, classes } = Astro2.props;
  const segment = extractSegmentURL(Astro2.url.pathname);
  return renderTemplate`${maybeRenderHead()}<li> <a class="relative group"${addAttribute(href, "href")}${addAttribute(icon && title, "aria-label")}> ${icon ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "class:list": ["size-10 lg:size-14 hover:text-zinc-500", classes], "name": icon, "aria-hidden": "true" })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="font-semibold text-xl lg:text-2xl font-display"> ${title} </span> <span${addAttribute([
    "absolute -bottom-1 left-0 w-0 h-2 bg-zinc-500 transition-all group-hover:w-full",
    href.startsWith(`/${segment}`) ? "w-full" : "w-0"
  ], "class:list")}></span> ` })}`} </a> </li>`;
}, "C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/components/ui/NavLink.astro", undefined);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const navData = [
    {
      title: "Showcase",
      href: "/projects",
      class: ""
    },
    {
      title: "Home",
      href: "/",
      icon: "memory-cube",
      class: "hover:animate-spin"
    },
    {
      title: "Stories",
      href: "/blog",
      class: ""
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-center py-3"> <ul class="flex items-center gap-4"> ${navData.map((item) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { "icon": item.icon, "href": item.href, "title": item.title, "classes": item.class })}`)} </ul> </nav>`;
}, "C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/components/Nav.astro", undefined);

const $$Astro$1 = createAstro("https://kiiyurus.space");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title = baseData.title, description = baseData.description } = Astro2.props;
  return renderTemplate`<head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/memory-cube.svg"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(baseData.title, "title")}${addAttribute(`${Astro2.site}rss.xml`, "href")}><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderHead()}</head>`;
}, "C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/layouts/BaseHead.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="grid gap-4 py-10 text-center"> <ul class="flex gap-4 justify-center"> ${socialData.map((item) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { "href": item.href, "title": item.title, "icon": item.icon, "classes": "size-6 lg:size-8" })}`)} </ul> <p class="text-balance text-base">
&copy; <span id="copyright">${(/* @__PURE__ */ new Date()).getFullYear()}</span>
Stephen Kiiyuru. All rights reserved.
</p> </footer> ${renderScript($$result, "C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/components/Footer.astro", undefined);

const $$Astro = createAstro("https://kiiyurus.space");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> ${renderComponent($$result, "BaseHead", $$BaseHead, { ...Astro2.props, "data-astro-cid-37fxchfa": true })}${maybeRenderHead()}<body class="text-white text-xl font-normal bg-zinc-950 tracking-wide" data-astro-cid-37fxchfa> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-37fxchfa": true })} <main class="p-3 grid gap-3" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true })} </body></html>`;
}, "C:/Users/St3vA/LevelUp/Engineer/kiiyurus.space/src/layouts/BaseLayout.astro", undefined);

export { $$BaseLayout as $, $$Icon as a };
