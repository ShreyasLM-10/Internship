import Button from "./Button";

/**
 * Reusable Card component that renders content from props.
 *
 * Props:
 *   title       – card heading (string)
 *   description – card body text (string)
 *   image       – image URL (string)
 *   category    – category badge label (string)
 *   buttonText  – CTA button label (string)
 *   onButtonClick – optional click handler for the CTA
 */
function Card({
  title,
  description,
  image,
  category,
  buttonText = "Learn More",
  onButtonClick,
}) {
  return (
    <article className="card">
      {image && (
        <div className="card__image-wrapper">
          <img
            src={image}
            alt={`Illustration for ${title}`}
            className="card__image"
            loading="lazy"
          />
          {category && <span className="card__badge">{category}</span>}
        </div>
      )}

      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <Button
          text={buttonText}
          variant="primary"
          onClick={onButtonClick}
        />
      </div>
    </article>
  );
}

export default Card;
