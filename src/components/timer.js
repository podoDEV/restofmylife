function fillDigitNumber(digit, numb) {
  const min = Math.pow(10, digit);
  let res = String(numb);

  if (min > numb) {
    const count = digit - res.length;
    for (let i = 0; i < count; i += 1) {
      res = '0' + res;
    }
  }

  return res;
}

export default function Timer(props) {
  if (props.date === null) {
    return <div className="timer-wrapper">계산 중...</div>;
  }

  const [y, d, h, m, s] = props.date;

  return (
    <div className="timer-wrapper">
      <div className="timer-info-wrapper">
        <span>{y}</span>yrs<span>{fillDigitNumber(3, d)}</span>dys
      </div>
      <div className="timer-info-wrapper">
        <span>{fillDigitNumber(2, h)}</span>hrs<span className="min">{fillDigitNumber(2, m)}</span>
        min
      </div>
      <div className="timer-info-wrapper">
        <span className="sec">{fillDigitNumber(2, s)}</span>secccccc
      </div>
      <div className="timer-info-wrapper">andurdead!</div>
    </div>
  );
}
