"use client";

// Exporting a React component as the default export.
export default function Error({
  // Destructuring the props object: { error, reset }
  error, // Prop: error - An Error object with an optional property 'digest' of type string.
  reset, // Prop: reset - A function to reset or handle the error.

// React functional component body.
}: {
  error: Error & { digest?: string } // TypeScript type definition for the component props.
  reset: () => void // TypeScript type definition for the component props.
}) {
  // JSX structure representing an HTML document.
  return (
    <div className="container">
      <div className="m-3 text-center">
        <h2 className="display-2 mb-3">Something went wrong!</h2>
        {/* Button triggering the 'reset' function on click. */}
        <button 
          className="btn btn-outline-primary fw-bold" 
          onClick={() => reset()}
        > Try again
        </button>
      </div>
    </div>
  );
}