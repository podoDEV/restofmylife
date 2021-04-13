import { useForm } from 'react-hook-form';

function Form(props) {
  const { handleSubmit, errors, register } = useForm();
  const onSubmit = (data) => {
    const { birth, gender } = data;

    props.history.push(`/result?birth=${birth}&gender=${gender}`);
  };
  const required = register({ required: true });

  return (
    <>
      <header className="App-header">입력</header>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          생일:
          <input type="date" name="birth" ref={required} />
          <br />
          남여:
          <label htmlFor="male">male</label>
          <input type="radio" value="male" id="male" name="gender" ref={required} />
          <label htmlFor="female">female</label>
          <input type="radio" value="female" id="female" name="gender" ref={required} />
          <input type="submit" value="Submit" />
          {errors.number && <span>This field is required</span>}
        </form>
      </main>
    </>
  );
}

export default Form;
