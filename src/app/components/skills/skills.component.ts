import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      svg: `
      <svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="nonzero" clip-rule="nonzero" d="M3 1.5C2.86193 1.5 2.75 1.61193 2.75 1.75V11.3003C2.75 11.3896 2.79769 11.4722 2.87509 11.5168L7.73381 14.3194C7.80942 14.363 7.90231 14.364 7.97886 14.3221L13.1201 11.5048C13.2002 11.4609 13.25 11.3769 13.25 11.2856V1.75C13.25 1.61193 13.1381 1.5 13 1.5H3ZM1.25 1.75C1.25 0.783502 2.0335 0 3 0H13C13.9665 0 14.75 0.783503 14.75 1.75V11.2856C14.75 11.9248 14.4015 12.5131 13.841 12.8203L8.69968 15.6375C8.16383 15.9311 7.51363 15.924 6.98434 15.6187L2.12562 12.8162C1.58382 12.5037 1.25 11.9258 1.25 11.3003V1.75ZM5 4.25C5 3.83579 5.33579 3.5 5.75 3.5H10.3654C10.7796 3.5 11.1154 3.83579 11.1154 4.25C11.1154 4.66421 10.7796 5 10.3654 5H6.5V6.71154H10.3654C10.7796 6.71154 11.1154 7.04732 11.1154 7.46154V10.3462C11.1154 10.6302 10.9549 10.8899 10.7008 11.017L8.3931 12.1708C8.18196 12.2764 7.93343 12.2764 7.72228 12.1708L5.41459 11.017C5.1605 10.8899 5 10.6302 5 10.3462V9.76923C5 9.35502 5.33579 9.01923 5.75 9.01923C6.16421 9.01923 6.5 9.35502 6.5 9.76923V9.88263L8.05769 10.6615L9.61539 9.88263V8.21154H5.75C5.33579 8.21154 5 7.87575 5 7.46154V4.25Z" fill="#000000"/>
      </svg>`,
      skillName: 'HTML',
    },
    {
      svg: `
      <svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="nonzero" clip-rule="nonzero" d="M3 1.60001C2.86193 1.60001 2.75 1.71193 2.75 1.85001V11.4003C2.75 11.4896 2.79769 11.5722 2.87509 11.6168L7.73381 14.4194C7.80942 14.463 7.90231 14.464 7.97886 14.4221L13.1201 11.6048C13.2002 11.5609 13.25 11.4769 13.25 11.3856V1.85001C13.25 1.71193 13.1381 1.60001 13 1.60001H3ZM1.25 1.85001C1.25 0.883508 2.0335 0.100006 3 0.100006H13C13.9665 0.100006 14.75 0.883509 14.75 1.85001V11.3856C14.75 12.0248 14.4015 12.6131 13.841 12.9203L8.69968 15.7375C8.16383 16.0311 7.51363 16.024 6.98434 15.7187L2.12562 12.9162C1.58382 12.6037 1.25 12.0258 1.25 11.4003V1.85001ZM5 4.35001C5 3.93579 5.33579 3.60001 5.75 3.60001H10.3654C10.7796 3.60001 11.1154 3.93579 11.1154 4.35001V10.4462C11.1154 10.7302 10.9549 10.9899 10.7008 11.117L8.3931 12.2708C8.18196 12.3764 7.93343 12.3764 7.72228 12.2708L5.41459 11.117C5.1605 10.9899 5 10.7302 5 10.4462V9.86924C5 9.45502 5.33579 9.11924 5.75 9.11924C6.16421 9.11924 6.5 9.45502 6.5 9.86924V9.98263L8.05769 10.7615L9.61539 9.98263V8.31154H7C6.58579 8.31154 6.25 7.97576 6.25 7.56154C6.25 7.14733 6.58579 6.81154 7 6.81154H9.61539V5.10001H5.75C5.33579 5.10001 5 4.76422 5 4.35001Z" fill="#fff"/>
      </svg>`,
      skillName: 'Css', 
    },
    {
      svg: `
      <svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="nonzero" clip-rule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM8.25 5.75C8.66421 5.75 9 6.08579 9 6.5V10.5C9 11.5048 8.72399 12.2584 8.15514 12.7324C7.61223 13.1848 6.95384 13.25 6.5 13.25C6.08579 13.25 5.75 12.9142 5.75 12.5C5.75 12.0858 6.08579 11.75 6.5 11.75C6.84617 11.75 7.06277 11.6902 7.19486 11.5801C7.301 11.4916 7.5 11.2452 7.5 10.5V6.5C7.5 6.08579 7.83578 5.75 8.25 5.75ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" fill="#000000"/>
      </svg>`,
      skillName: 'Javascript',
    },
    {
      svg: `
      <svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="nonzero" clip-rule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" fill="#000000"/>
      </svg>`,
      skillName: 'Typescript',
    },
    {
      svg: `
      <svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="nonzero" clip-rule="nonzero" d="M7.46664 0.133215C7.81355 0.0222044 8.18645 0.022205 8.53336 0.133215L13.7834 1.81321C14.5082 2.04516 15 2.71894 15 3.47996V7C15 8.56605 14.6808 10.1824 13.6968 11.6822C12.7137 13.1807 11.1116 14.4948 8.66492 15.5369C8.24091 15.7175 7.75909 15.7175 7.33508 15.5369C4.88836 14.4948 3.28631 13.1807 2.3032 11.6822C1.31923 10.1824 1 8.56605 1 7V3.47996C1 2.71894 1.49183 2.04516 2.21664 1.81321L7.46664 0.133215ZM8.07619 1.56185C8.02664 1.54599 7.97336 1.54599 7.92381 1.56185L2.67381 3.24185C2.57026 3.27499 2.5 3.37124 2.5 3.47996V7C2.5 8.35833 2.77465 9.66633 3.55737 10.8594C4.34094 12.0537 5.67838 13.2009 7.92287 14.1568C7.97134 14.1775 8.02866 14.1775 8.07713 14.1568C10.3216 13.2009 11.6591 12.0537 12.4426 10.8594C13.2253 9.66633 13.5 8.35833 13.5 7V3.47996C13.5 3.37124 13.4297 3.27499 13.3262 3.24185L8.07619 1.56185ZM8 3.25C8.30668 3.25 8.58246 3.43672 8.69636 3.72146L11.1964 9.97146C11.3502 10.356 11.1631 10.7925 10.7785 10.9464C10.394 11.1002 9.95748 10.9131 9.80364 10.5285L9.49222 9.75H6.50778L6.19636 10.5285C6.04252 10.9131 5.60604 11.1002 5.22146 10.9464C4.83687 10.7925 4.64981 10.356 4.80364 9.97146L7.30364 3.72146C7.41754 3.43672 7.69332 3.25 8 3.25ZM7.10778 8.25H8.89222L8 6.01944L7.10778 8.25Z" fill="#000000"/>
      </svg>`,
      skillName: 'Angular',
    },
    {
      svg: `
      <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3718 2.14967C17.6494 2.38362 18.931 2.95877 19.5523 4.14219C20.1925 5.36153 20.1254 6.54799 19.5931 7.54688C19.09 8.49116 18.2137 9.19688 17.3306 9.67101C16.441 10.1486 15.4383 10.449 14.5592 10.5078C14.1216 10.5371 13.6615 10.5102 13.2435 10.3753C12.8228 10.2395 12.36 9.96256 12.1034 9.44277C11.8588 8.94757 12.062 8.3479 12.5572 8.10336C13.0217 7.87402 13.578 8.03852 13.8471 8.46838C13.8504 8.46951 13.8539 8.47069 13.8577 8.47192C13.9564 8.50378 14.1435 8.53118 14.4257 8.51229C14.9864 8.47477 15.7142 8.26879 16.3845 7.9089C17.0613 7.54557 17.5742 7.08275 17.8281 6.60638C18.0528 6.18464 18.1104 5.69836 17.7815 5.07185C17.5811 4.69004 17.0439 4.306 16.0116 4.11696C15.0135 3.93419 13.7471 3.97678 12.447 4.24722C11.1503 4.51696 9.88376 5.00024 8.87976 5.64391C7.86596 6.29386 7.2052 7.04998 6.95131 7.8336C6.67668 8.68127 6.77402 9.27789 7.02132 9.76791C7.29259 10.3054 7.78942 10.8032 8.47449 11.3361C8.80606 11.5941 9.1581 11.8429 9.52913 12.1052L9.54928 12.1195C9.92009 12.3816 10.3115 12.6587 10.6774 12.9476C10.9855 13.1909 11.3003 13.4609 11.5885 13.7647C12.8818 13.5153 14.0023 13.5424 14.9205 13.9624C16.1028 14.5031 16.6955 15.5687 16.9743 16.7748C17.0987 17.3129 16.7633 17.8499 16.2252 17.9743C15.6871 18.0987 15.1501 17.7633 15.0257 17.2252C14.8256 16.3593 14.4986 15.9687 14.0887 15.7812C13.7882 15.6438 13.3394 15.5655 12.6714 15.6262C13.2874 17.7915 12.2119 19.7524 10.8952 20.8632C10.1859 21.4616 9.31751 21.8977 8.44947 21.9843C7.54156 22.075 6.57156 21.7705 6.00238 20.8227C5.49974 19.9858 5.49575 19.0959 5.75793 18.3035C6.01018 17.5412 6.50837 16.855 7.05418 16.287C7.74016 15.573 8.60299 14.9426 9.42126 14.5041C9.10818 14.2578 8.76558 14.0147 8.3948 13.7526L8.35934 13.7275C7.99964 13.4733 7.61479 13.2013 7.24641 12.9147C6.49533 12.3304 5.71114 11.6108 5.23582 10.669C4.73654 9.67971 4.62173 8.53497 5.04868 7.21717C5.49638 5.83533 6.56434 4.75261 7.80034 3.96021C9.04614 3.16152 10.5504 2.59894 12.0397 2.28914C13.5255 1.98006 15.06 1.90945 16.3718 2.14967ZM10.722 16.09C10.0488 16.3955 9.17323 16.9682 8.49635 17.6726C8.06676 18.1198 7.78131 18.5551 7.6567 18.9318C7.54201 19.2784 7.56793 19.5449 7.71693 19.793C7.7994 19.9303 7.92577 20.0267 8.25081 19.9942C8.61572 19.9578 9.11685 19.7469 9.60556 19.3346C10.5409 18.5455 11.1072 17.3249 10.722 16.09ZM13.8121 8.45393C13.8121 8.45392 13.8127 8.45422 13.8138 8.45488Z" fill="#000000"/>
      </svg>`,
      skillName: 'Sass',
    },
    {
      svg: `
      <svg width="800px" height="800px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.99976 9.5C3.39267 9.04388 3 8.3178 3 7.5C3 6.6822 3.39267 5.95611 3.99976 5.5C3.39267 5.04388 3 4.3178 3 3.5C3 2.11929 4.11929 1 5.5 1H9.5C10.8807 1 12 2.11929 12 3.5C12 4.3178 11.6073 5.04388 11.0002 5.5C11.6073 5.95611 12 6.6822 12 7.5C12 8.88071 10.8807 10 9.5 10C8.9372 10 8.41783 9.81403 8 9.50018V11.5C8 12.8807 6.88071 14 5.5 14C4.11929 14 3 12.8807 3 11.5C3 10.6822 3.39267 9.95611 3.99976 9.5Z" fill="#000000"/>
      </svg>`,
      skillName: 'Figma',
    },
    {
      svg: `
      <svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="nonzero" clip-rule="nonzero" d="M4.84989 2.37195C4.59895 2.51683 4.33488 2.91636 4.30424 3.78785C4.28968 4.20181 3.9423 4.52559 3.52835 4.51103C3.11439 4.49647 2.79061 4.1491 2.80516 3.73514C2.84273 2.66673 3.1806 1.60366 4.09989 1.07291C5.02179 0.540653 6.11484 0.782356 7.06128 1.28727C7.42674 1.48224 7.56495 1.93656 7.36998 2.30201C7.17501 2.66747 6.72069 2.80568 6.35524 2.61072C5.5818 2.1981 5.10158 2.22663 4.84989 2.37195ZM8.87139 3.67284C9.19036 3.40858 9.66315 3.45293 9.92741 3.7719C10.4818 4.44103 11.0136 5.20405 11.4963 6.04018C12.5366 7.84191 13.178 9.68785 13.3509 11.2362C13.4372 12.0091 13.4108 12.7446 13.2303 13.3754C13.0484 14.011 12.6941 14.5863 12.0999 14.9293C11.381 15.3444 10.5509 15.2855 9.79114 15.0089C9.02868 14.7313 8.24395 14.2056 7.49586 13.5228C7.18993 13.2435 7.16831 12.7691 7.44756 12.4632C7.72681 12.1573 8.20119 12.1356 8.50712 12.4149C9.16624 13.0165 9.78567 13.4105 10.3043 13.5994C10.8257 13.7892 11.1537 13.7436 11.3499 13.6303C11.5143 13.5354 11.6797 13.342 11.7882 12.9627C11.8981 12.5787 11.9328 12.0529 11.8602 11.4026C11.7152 10.1045 11.1591 8.45607 10.1973 6.79018C9.75492 6.02396 9.27081 5.33055 8.77232 4.72886C8.50807 4.40989 8.55242 3.93709 8.87139 3.67284Z" fill="#000000"/>
        <path fill-rule="nonzero" clip-rule="nonzero" d="M14.5 8.20557C14.5 7.91581 14.286 7.48735 13.5466 7.02507C13.1954 6.80549 13.0887 6.34276 13.3083 5.99154C13.5279 5.64032 13.9906 5.53361 14.3418 5.75319C15.2483 6.31993 16 7.14407 16 8.20557C16 9.27009 15.2442 10.0958 14.3337 10.663C13.9821 10.882 13.5195 10.7746 13.3005 10.423C13.0815 10.0714 13.189 9.60887 13.5405 9.38985C14.2846 8.92635 14.5 8.4962 14.5 8.20557ZM11.3626 11.0378C11.432 11.4462 11.1572 11.8335 10.7488 11.9029C9.89219 12.0484 8.96547 12.1274 8 12.1274C5.91954 12.1274 4.00018 11.76 2.57286 11.1355C1.86032 10.8238 1.23659 10.4332 0.780529 9.9615C0.320977 9.48616 0 8.89166 0 8.20557C0 7.37549 0.466082 6.68599 1.08548 6.16636C1.70712 5.64485 2.55471 5.22808 3.52013 4.92164C3.91494 4.79633 4.33657 5.01479 4.46189 5.40959C4.5872 5.80439 4.36874 6.22603 3.97394 6.35135C3.12334 6.62134 2.4724 6.96078 2.04954 7.31553C1.62442 7.67217 1.5 7.97899 1.5 8.20557C1.5 8.39536 1.58476 8.6353 1.85895 8.91891C2.13663 9.20613 2.57464 9.49905 3.17409 9.76131C4.37076 10.2848 6.07639 10.6274 8 10.6274C8.88475 10.6274 9.72732 10.5549 10.4976 10.424C10.906 10.3547 11.2933 10.6295 11.3626 11.0378Z" fill="#000000"/>
        <path fill-rule="nonzero" clip-rule="nonzero" d="M4.87192 13.6303C5.12286 13.7752 5.6009 13.8041 6.37095 13.3949C6.73673 13.2005 7.19082 13.3395 7.38519 13.7052C7.57957 14.071 7.44062 14.5251 7.07484 14.7195C6.13079 15.2211 5.04121 15.4601 4.12192 14.9293C3.20003 14.3971 2.86282 13.3296 2.82687 12.2575C2.81299 11.8435 3.13733 11.4967 3.55131 11.4828C3.96529 11.4689 4.31215 11.7932 4.32603 12.2072C4.35541 13.0834 4.62023 13.485 4.87192 13.6303ZM3.98778 9.49712C3.59944 9.35301 3.40145 8.92138 3.54556 8.53304C3.84786 7.71839 4.24274 6.8763 4.72548 6.04018C5.76571 4.23845 7.04361 2.75996 8.29806 1.83609C8.92431 1.37487 9.57441 1.02999 10.211 0.870901C10.8524 0.71059 11.5278 0.729863 12.1219 1.07291C12.8408 1.48795 13.2049 2.23634 13.3452 3.03257C13.486 3.83168 13.4232 4.77409 13.2058 5.7634C13.1169 6.16796 12.7169 6.42388 12.3124 6.33501C11.9078 6.24613 11.6519 5.84612 11.7408 5.44155C11.9322 4.56992 11.9637 3.83647 11.868 3.29288C11.7717 2.7464 11.5681 2.48524 11.3719 2.37195C11.2076 2.27705 10.9574 2.23049 10.5747 2.32614C10.1871 2.42301 9.71442 2.65588 9.18757 3.04388C8.13584 3.81846 6.98632 5.12428 6.02452 6.79018C5.58214 7.55639 5.22369 8.32235 4.95185 9.0549C4.80774 9.44323 4.37611 9.64122 3.98778 9.49712Z" fill="#000000"/>
        <path d="M9.45925 8.06618C9.45925 8.81694 8.85063 9.42556 8.09987 9.42556C7.34911 9.42556 6.7405 8.81694 6.7405 8.06618C6.7405 7.31542 7.34911 6.70681 8.09987 6.70681C8.85063 6.70681 9.45925 7.31542 9.45925 8.06618Z" fill="#000000"/>
      </svg>`,
      skillName: 'React',
    },
    {
      svg: `
      <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4142 3.82843C12.6332 3.04738 11.3668 3.04738 10.5858 3.82843L9.91421 4.5L11.482 6.06774C11.6472 6.02356 11.8208 6 12 6C13.1046 6 14 6.89543 14 8C14 8.17916 13.9764 8.35282 13.9323 8.51804L15.982 10.5677C16.1472 10.5236 16.3208 10.5 16.5 10.5C17.6046 10.5 18.5 11.3954 18.5 12.5C18.5 13.6046 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 13.6046 14.5 12.5C14.5 12.3208 14.5236 12.1472 14.5677 11.982L13 10.4142V15.2676C13.5978 15.6134 14 16.2597 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 16.2597 10.4022 15.6134 11 15.2676V9.73244C10.4022 9.38663 10 8.74028 10 8C10 7.82084 10.0236 7.64718 10.0677 7.48196L8.5 5.91421L3.82843 10.5858C3.04738 11.3668 3.04738 12.6332 3.82843 13.4142L10.5858 20.1716C11.3668 20.9526 12.6332 20.9526 13.4142 20.1716L20.1716 13.4142C20.9526 12.6332 20.9526 11.3668 20.1716 10.5858L13.4142 3.82843ZM9.17157 2.41421C10.7337 0.852115 13.2663 0.852119 14.8284 2.41422L21.5858 9.17157C23.1479 10.7337 23.1479 13.2663 21.5858 14.8284L14.8284 21.5858C13.2663 23.1479 10.7337 23.1479 9.17157 21.5858L2.41421 14.8284C0.852115 13.2663 0.852119 10.7337 2.41422 9.17157L9.17157 2.41421Z" fill="#000000"/>
      </svg>`,
      skillName: 'Git/Github',
    },
    {
      svg: `
      <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>firebase</title>
        <path d="M18.874 9.935l-2.274-4.351c-0.116-0.217-0.341-0.363-0.6-0.363s-0.484 0.145-0.598 0.359l-0.002 0.004-9.985 17.894zM26.852 25.202l-2.812-17.495c-0.052-0.325-0.331-0.571-0.667-0.571-0.189 0-0.359 0.077-0.482 0.202l-0 0-17.744 17.865 9.817 5.532c0.286 0.163 0.628 0.26 0.992 0.26s0.707-0.096 1.002-0.265l-0.010 0.005zM5.865 20.589l2.955-19.008c0.051-0.328 0.331-0.577 0.67-0.577 0.258 0 0.483 0.144 0.597 0.357l0.002 0.004 3.178 5.962z"></path>
      </svg>`,
      skillName: 'Firebase',
    }
  ]

  isActive: boolean = false;
  startX: number;
  scrollLeft: number;

  constructor(private renderer: Renderer2) {  }

  onMouseDown(e: MouseEvent, skillsDiv: HTMLElement) {
    this.isActive = true;
    this.startX = e.pageX - skillsDiv.offsetLeft;
    this.scrollLeft = skillsDiv.scrollLeft;
    this.renderer.addClass(skillsDiv, 'skills-active');
  }

  onMouseUp(skillsDiv: HTMLElement) {
    this.isActive = false;
    this.renderer.removeClass(skillsDiv, 'skills-active');
  }

  onMouseLeave(skillsDiv: HTMLElement) {
    this.isActive = false;
    this.renderer.removeClass(skillsDiv, 'skills-active');
  }

  drag(e: MouseEvent, skillsDiv: HTMLElement) {
    if (!this.isActive) return;
    e.preventDefault();
    const x = e.pageX - skillsDiv.offsetLeft;
    const walk = x - this.startX;
    skillsDiv.scrollLeft = this.scrollLeft - walk;
  }
}
