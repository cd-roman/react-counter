export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit! Buy <b>Pro</b> for &gt;100
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}
