import './infobox.scss';

function InfoBox(props) {
  // Title Default H2 Tag with Props
  const { tag: HeadingTag = 'h4' } = props;

  return (
    <div className={`infobox infobox-default ${props.extraClass || ''}`}>
      <div className="infobox-top">
        {props?.icon && (
          <div className="infobox-icon">
            <i className={props.icon}></i>
          </div>
        )}
        <HeadingTag className="infobox-title">{props.title}</HeadingTag>
      </div>
      {props?.description && (
        <div className="infobox-description">{props.description}</div>
      )}
    </div>
  );
}

function InfoBox2(props) {
  // Title Default H2 Tag with Props
  const { tag: HeadingTag = 'h5' } = props;

  return (
    <div
      className={`infobox infobox-style-02 ${props.line || ''} ${
        props.extraClass || ''
      }`}
    >
      <div className="infobox-top">
        {props?.icon && (
          <div className="infobox-icon">
            <i className={props.icon}></i>
          </div>
        )}
        <HeadingTag className="infobox-title">{props.title}</HeadingTag>
      </div>
      {props?.description && (
        <div className="infobox-description">{props.description}</div>
      )}
    </div>
  );
}

function InfoBox3(props) {
  // Title Default H2 Tag with Props
  const { tag: HeadingTag = 'h4' } = props;

  return (
    <div
      className={`infobox infobox-style-03 ${props.style || ''} ${
        props.extraClass || ''
      }`}
    >
      <div className="infobox-top">
        {props?.icon && (
          <div className="infobox-icon">
            <i className={props.icon}></i>
          </div>
        )}
        <HeadingTag className="infobox-title">{props.title}</HeadingTag>
      </div>
      {props?.description && (
        <div className="infobox-description">{props.description}</div>
      )}
    </div>
  );
}

export default InfoBox;
export { InfoBox2, InfoBox3 };
