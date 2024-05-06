type Props = {
  onClick?: any;
  title: string;
};
const ButtonG = (props: Props) => {
  return (
    <div className=" btn btn-secondary mx-auto mr-4">
      <input onClick={props.onClick} type="button" value={props.title} />
    </div>
  );
};
export default ButtonG;
