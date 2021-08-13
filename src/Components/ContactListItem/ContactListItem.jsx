//Styles
import css from './ContactListItem.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
//Components
import { GoTrashcan } from 'react-icons/go';
import Loader from 'react-loader-spinner';

export const ContactListItem = ({ data, hangleContactDelete, isLoading }) => {
  return (
    <li className={css.listItem} key={data.id}>
      <span>{data.name}</span>
      <span>{data.tel}</span>
      <button
        className={isLoading ? css.buttonFetching : css.button}
        type="button"
        onClick={hangleContactDelete(data.id)}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader
            type="TailSpin"
            color="#fff"
            height={12}
            width={12}
            timeout={3000} //3 secs
          />
        ) : (
          'delete'
        )}
        {!isLoading && <GoTrashcan size="16" />}
      </button>
    </li>
  );
};
