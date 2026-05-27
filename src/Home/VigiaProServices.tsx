import React from "react";
// @ts-ignore
import "./VigiaProServices.css";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export const VigiaProServices: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Monitoramento Online",
      description:
        "Acompanhe as imagens ao vivo ou volte no tempo para verificar as gravações, apenas com um clique.",
      color: "#4CAF50", // Verde
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="37"
          viewBox="0 0 41 37"
          fill="none"
        >
          <path
            d="M14 34.8333H20.25M20.25 34.8333H26.5M20.25 34.8333V28.5833M20.25 28.5833H34.8333C35.9384 28.5833 36.9982 28.1443 37.7796 27.3629C38.561 26.5815 39 25.5217 39 24.4167V5.66667C39 4.5616 38.561 3.50179 37.7796 2.72039C36.9982 1.93899 35.9384 1.5 34.8333 1.5H5.66667C4.5616 1.5 3.50179 1.93899 2.72039 2.72039C1.93899 3.50179 1.5 4.5616 1.5 5.66667V24.4167C1.5 25.5217 1.93899 26.5815 2.72039 27.3629C3.50179 28.1443 4.5616 28.5833 5.66667 28.5833H20.25Z"
            stroke="#66B066"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Acesse de onde estiver",
      description:
        "Assista suas gravações ou monitore suas câmeras ao vivo, de qualquer lugar do mundo.",
      color: "#9C27B0", // Roxo
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M10.2701 34.1221C6.49922 35.2533 4.16797 36.8158 4.16797 38.5419C4.16797 41.9939 13.4951 44.7919 25.0013 44.7919C36.5076 44.7919 45.8346 41.9939 45.8346 38.5419C45.8346 36.8158 43.5023 35.2533 39.7326 34.1221"
            stroke="#704AF2"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.0026 36.4587C25.0026 36.4587 38.5443 27.6087 38.5443 17.3774C38.5443 10.0816 32.4818 4.16699 25.0026 4.16699C17.5234 4.16699 11.4609 10.0816 11.4609 17.3774C11.4609 27.6087 25.0026 36.4587 25.0026 36.4587Z"
            stroke="#704AF2"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M25.0013 22.9167C26.3826 22.9167 27.7074 22.3679 28.6842 21.3912C29.6609 20.4144 30.2096 19.0897 30.2096 17.7083C30.2096 16.327 29.6609 15.0022 28.6842 14.0255C27.7074 13.0487 26.3826 12.5 25.0013 12.5C23.62 12.5 22.2952 13.0487 21.3185 14.0255C20.3417 15.0022 19.793 16.327 19.793 17.7083C19.793 19.0897 20.3417 20.4144 21.3185 21.3912C22.2952 22.3679 23.62 22.9167 25.0013 22.9167Z"
            stroke="#704AF2"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Armazenamento em nuvem",
      description: "Suas gravações mais seguras e sem disponíveis.",
      color: "#FF9800", // Laranja/Amarelo
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M41.6667 29.1663C43.9679 29.1663 45.8333 27.3009 45.8333 24.9997C45.8333 22.6985 43.9679 20.833 41.6667 20.833C39.3655 20.833 37.5 22.6985 37.5 24.9997C37.5 27.3009 39.3655 29.1663 41.6667 29.1663Z"
            stroke="#F3BC4C"
            strokeWidth="3.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M41.6667 12.5003C43.9679 12.5003 45.8333 10.6348 45.8333 8.33366C45.8333 6.03247 43.9679 4.16699 41.6667 4.16699C39.3655 4.16699 37.5 6.03247 37.5 8.33366C37.5 10.6348 39.3655 12.5003 41.6667 12.5003Z"
            stroke="#F3BC4C"
            strokeWidth="3.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M41.6667 45.8333C43.9679 45.8333 45.8333 43.9679 45.8333 41.6667C45.8333 39.3655 43.9679 37.5 41.6667 37.5C39.3655 37.5 37.5 39.3655 37.5 41.6667C37.5 43.9679 39.3655 45.8333 41.6667 45.8333Z"
            stroke="#F3BC4C"
            strokeWidth="3.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.33464 29.1663C10.6358 29.1663 12.5013 27.3009 12.5013 24.9997C12.5013 22.6985 10.6358 20.833 8.33464 20.833C6.03345 20.833 4.16797 22.6985 4.16797 24.9997C4.16797 27.3009 6.03345 29.1663 8.33464 29.1663Z"
            stroke="#F3BC4C"
            strokeWidth="3.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 25H37.5"
            stroke="#F3BC4C"
            strokeWidth="3.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.5013 8.33301H29.168C25.0013 8.33301 22.918 10.4163 22.918 14.583V35.4163C22.918 39.583 25.0013 41.6663 29.168 41.6663H37.5013"
            stroke="#F3BC4C"
            strokeWidth="3.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Botão de alerta",
      description:
        "Acione o botão de pânico e envie um alerta para todos os vizinhos e a base responsável será notificada.",
      color: "#F44336", // Vermelho
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M27.7054 6.55859L45.6929 37.7128C45.9672 38.1878 46.1116 38.7267 46.1116 39.2752C46.1116 39.8238 45.9672 40.3627 45.6929 40.8377C45.4186 41.3128 45.0242 41.7073 44.5491 41.9816C44.0741 42.2558 43.5352 42.4002 42.9866 42.4003H7.01164C6.46309 42.4002 5.92422 42.2558 5.44917 41.9816C4.97412 41.7073 4.57964 41.3128 4.30537 40.8377C4.0311 40.3627 3.88672 39.8238 3.88672 39.2752C3.88672 38.7267 4.03112 38.1878 4.30539 37.7128L22.2929 6.55859C23.495 4.47526 26.5012 4.47526 27.7054 6.55859ZM24.9991 10.2044L8.81581 38.2336H41.1825L24.9991 10.2044ZM24.9991 31.2503C25.5517 31.2503 26.0816 31.4698 26.4723 31.8605C26.863 32.2512 27.0825 32.7811 27.0825 33.3336C27.0825 33.8861 26.863 34.416 26.4723 34.8067C26.0816 35.1974 25.5517 35.4169 24.9991 35.4169C24.4466 35.4169 23.9167 35.1974 23.526 34.8067C23.1353 34.416 22.9158 33.8861 22.9158 33.3336C22.9158 32.7811 23.1353 32.2512 23.526 31.8605C23.9167 31.4698 24.4466 31.2503 24.9991 31.2503ZM24.9991 16.6669C25.5517 16.6669 26.0816 16.8864 26.4723 17.2771C26.863 17.6678 27.0825 18.1977 27.0825 18.7503V27.0836C27.0825 27.6361 26.863 28.166 26.4723 28.5567C26.0816 28.9474 25.5517 29.1669 24.9991 29.1669C24.4466 29.1669 23.9167 28.9474 23.526 28.5567C23.1353 28.166 22.9158 27.6361 22.9158 27.0836V18.7503C22.9158 18.1977 23.1353 17.6678 23.526 17.2771C23.9167 16.8864 24.4466 16.6669 24.9991 16.6669Z"
            fill="#E27244"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Aplicativo Móvel",
      description:
        "Acesse tudo através de um único aplicativo disponível para dispositivos Android e iOS.",
      color: "#2196F3", // Azul
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="50"
          viewBox="0 0 41 50"
          fill="none"
        >
          <path
            d="M38.7344 13.2969V36.4219C38.7344 45.6719 36.4219 47.9844 27.1719 47.9844H13.2969C4.04688 47.9844 1.73438 45.6719 1.73438 36.4219V13.2969C1.73438 4.04688 4.04688 1.73438 13.2969 1.73438H27.1719C36.4219 1.73438 38.7344 4.04688 38.7344 13.2969Z"
            stroke="#5E5DEF"
            strokeWidth="3.46875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.8594 9.82812H15.6094"
            stroke="#5E5DEF"
            strokeWidth="3.46875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.2367 41.2781C22.2163 41.2781 23.8211 39.6733 23.8211 37.6937C23.8211 35.7142 22.2163 34.1094 20.2367 34.1094C18.2571 34.1094 16.6523 35.7142 16.6523 37.6937C16.6523 39.6733 18.2571 41.2781 20.2367 41.2781Z"
            stroke="#5E5DEF"
            strokeWidth="3.46875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Suporte",
      description: "Suporte especializado sempre disponível!",
      color: "#607D8B", // Cinza
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M39.0013 30.7503C39.7305 28.9794 40.1263 27.0836 40.1263 25.0003C40.1263 23.5003 39.8971 22.0628 39.5013 20.7294C38.1471 21.0419 36.7305 21.2086 35.2513 21.2086C32.2221 21.2119 29.2365 20.4868 26.5462 19.0945C23.8558 17.7022 21.5397 15.6835 19.793 13.2086C17.9262 17.731 14.4007 21.3683 9.9388 23.3753C9.85547 23.8961 9.85547 24.4586 9.85547 25.0003C9.85547 26.9893 10.2472 28.9588 11.0084 30.7963C11.7695 32.6339 12.8852 34.3036 14.2916 35.71C17.132 38.5504 20.9844 40.1461 25.0013 40.1461C27.1888 40.1461 29.293 39.6669 31.1888 38.8128C32.3763 41.0836 32.918 42.2086 32.8763 42.2086C29.4596 43.3544 26.8138 43.9169 25.0013 43.9169C19.9596 43.9169 15.1471 41.9378 11.6055 38.3753C9.44932 36.2293 7.8477 33.5909 6.9388 30.6878H4.16797V21.2086H6.4388C7.12681 17.8597 8.70858 14.7595 11.0163 12.2369C13.324 9.71439 16.2715 7.86362 19.5462 6.88102C22.8208 5.89842 26.3003 5.82063 29.6156 6.65591C32.9309 7.4912 35.9582 9.20839 38.3763 11.6253C41.0009 14.2411 42.7915 17.5759 43.5221 21.2086H45.8346V30.6878H45.7096L38.293 37.5003L27.2513 36.2503V32.7711H37.3138L39.0013 30.7503ZM19.3138 24.5211C19.9388 24.5211 20.543 24.7711 20.9805 25.2294C21.4201 25.6727 21.6669 26.2718 21.6669 26.8961C21.6669 27.5205 21.4201 28.1195 20.9805 28.5628C20.543 29.0003 19.9388 29.2503 19.3138 29.2503C18.0013 29.2503 16.9388 28.2086 16.9388 26.8961C16.9388 25.5836 18.0013 24.5211 19.3138 24.5211ZM30.668 24.5211C31.9805 24.5211 33.0221 25.5836 33.0221 26.8961C33.0221 28.2086 31.9805 29.2503 30.668 29.2503C29.3555 29.2503 28.293 28.2086 28.293 26.8961C28.293 26.2662 28.5432 25.6621 28.9886 25.2167C29.434 24.7713 30.0381 24.5211 30.668 24.5211Z"
            fill="#DF5E63"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services-container" className="services-container">
      <div className="services-main-title-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="89"
          height="81"
          viewBox="0 0 89 81"
          fill="none"
        >
          <path
            opacity="0.8"
            d="M1.50129 45.4566L0.0229656 68.0597C-0.354762 73.835 4.02086 78.8231 9.79621 79.2008L34.5322 80.8186C37.1947 80.9928 39.8233 80.1448 41.8821 78.4476L83.0761 44.4883C85.3067 42.6495 86.6786 39.9708 86.8673 37.0861L88.5626 11.1632C88.9587 5.10728 84.1438 -0.017811 78.075 -0.000206413L53.4951 0.0710958C51.006 0.0783164 48.6006 0.971333 46.7098 2.59025L5.14279 38.1802C2.99845 40.0162 1.68552 42.6397 1.50129 45.4566Z"
            fill="url(#paint0_linear_97_451)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_97_451"
              x1="43.874"
              y1="0.147591"
              x2="44.7902"
              y2="81.0205"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3171DE" />
              <stop offset="0.644231" stopColor="#013E72" />
            </linearGradient>
          </defs>
        </svg>
        <h2 className="services-main-title">
          Vigilância constante para quem não abre mão do que é{" "}
          <span className="highlight">importante</span>.
        </h2>
      </div>

      <div className="services-grid-wrapper">
        <div className="background-glow"></div>

        {/* Cole seus caminhos/vetores dentro de cada respectivo SVG abaixo */}
        <svg
          className="decorative-svg-left"
          xmlns="http://www.w3.org/2000/svg"
          width="179"
          height="176"
          viewBox="0 0 179 176"
          fill="none"
        >
          <path
            opacity="0.8"
            d="M0.000511154 106.015L0.000311211 153.679C0.000260209 165.858 9.87297 175.731 22.0517 175.731L74.2133 175.731C79.8278 175.731 85.2308 173.59 89.3207 169.743L171.155 92.7802C175.586 88.6127 178.099 82.7999 178.099 76.7168L178.099 22.0521C178.099 9.28183 167.285 -0.818416 154.544 0.0519342L102.942 3.57703C97.7167 3.93401 92.7888 6.13943 89.0409 9.7984L6.64756 90.2367C2.3971 94.3863 0.000536102 100.075 0.000511154 106.015Z"
            fill="url(#paint0_linear_97_448)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_97_448"
              x1="82.751"
              y1="5.05884"
              x2="95.7804"
              y2="174.746"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3171DE" />
              <stop offset="1" stop-color="#4AC0F2" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="decorative-svg-right"
          xmlns="http://www.w3.org/2000/svg"
          width="179"
          height="176"
          viewBox="0 0 179 176"
          fill="none"
        >
          <path
            opacity="0.8"
            d="M0.000510679 106.015L0.000311092 153.679C0.00026009 165.858 9.87298 175.731 22.0517 175.731L74.2133 175.731C79.8278 175.731 85.2308 173.59 89.3207 169.743L171.155 92.7802C175.586 88.6127 178.099 82.7999 178.099 76.7168L178.099 22.0521C178.099 9.28183 167.285 -0.818416 154.544 0.0519343L102.942 3.57703C97.7167 3.93401 92.7888 6.13943 89.0409 9.7984L6.64756 90.2367C2.3971 94.3863 0.000535151 100.075 0.000510679 106.015Z"
            fill="url(#paint0_linear_97_447)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_97_447"
              x1="82.751"
              y1="5.05884"
              x2="95.7804"
              y2="174.746"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3171DE" />
              <stop offset="1" stop-color="#013E72" />
            </linearGradient>
          </defs>
        </svg>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
