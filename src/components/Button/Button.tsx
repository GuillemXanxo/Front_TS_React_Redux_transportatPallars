import {
  ButtonUsuari,
  ButtonCardRed,
  ButtonMenu,
  ButtonCardDefault,
} from "./ButtonComponent.styles";
import { faUser, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faHouseUser,
  faMapLocationDot,
  faMagnifyingGlass,
  faEye,
  faChevronLeft,
  faArrowRightFromBracket,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  className: string;
  text?: string;
  nature: string;
  actionOnClick: () => void;
}

const Button = ({
  className,
  actionOnClick,
  text,
  nature,
}: ButtonProps): JSX.Element => {
  return (
    <>
      {nature === "usuari" && (
        <ButtonUsuari
          aria-label="Entra com a usuari"
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faUser} />
        </ButtonUsuari>
      )}

      {nature === "home" && (
        <ButtonUsuari
          aria-label="Espai d'usuari"
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faHouseUser} />
        </ButtonUsuari>
      )}

      {nature === "delete" && (
        <ButtonCardRed
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faCircleXmark} className="icon" />
        </ButtonCardRed>
      )}

      {nature === "update" && (
        <ButtonCardDefault
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faPencil} className="icon" />
        </ButtonCardDefault>
      )}

      {nature === "crear-viatge" && (
        <ButtonMenu
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faMapLocationDot} className="icon" />
        </ButtonMenu>
      )}

      {nature === "cerca-viatge" && (
        <ButtonMenu
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        </ButtonMenu>
      )}

      {nature === "detall" && (
        <ButtonCardDefault
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faEye} className="icon" />
        </ButtonCardDefault>
      )}

      {nature === "enrere-crono" && (
        <ButtonCardDefault
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faChevronLeft} className="icon" />
        </ButtonCardDefault>
      )}

      {nature === "tanca-sessio" && (
        <ButtonMenu
          className={className}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            actionOnClick()
          }
        >
          {text}
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="icon" />
        </ButtonMenu>
      )}
    </>
  );
};

export default Button;
