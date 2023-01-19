export function Header() {
  return (
    <div>
      <header>
      {/* when you use a pound sign it will link to elements with that id on the page */}
        <a href="#">Home</a> | <a href="#crafts-index">All crafts</a>
      </header>
    </div>
  );
}