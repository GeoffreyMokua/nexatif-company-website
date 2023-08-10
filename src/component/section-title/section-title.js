import './section-title.scss';

function SectionTitle(props) {
  // Title Default H2 Tag with Props
  const { tag: HeadingTag = 'h2' } = props;

  return (
    <>
      <div className={`section-title ${props.extraClass || ''}`}>
        <HeadingTag className="title">{props.title}</HeadingTag>
        {props?.content && <p>{props.content}</p>}
      </div>
    </>
  );
}

export default SectionTitle;
