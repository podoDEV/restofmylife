import { Link } from 'react-router-dom';
import Timer from '../components/timer';
import useRestTime from '../hook/restTime';
import { getQueryStringParams } from '../helper/queryStringParams';
import arrowImage from '../styles/image/arrow-down.png';

function Form(props) {
  const { birth, gender } = getQueryStringParams(props.history.location.search);
  const seconds = useRestTime(birth, gender);

  return (
    <div className="result-page-wrapper">
      <span className="title">..after</span>
      <Timer date={seconds} />
      <Link to="/#" className="title move-down-link">
        oh, what should I do? ;( <img src={arrowImage} />
      </Link>
    </div>
  );
}

export default Form;
