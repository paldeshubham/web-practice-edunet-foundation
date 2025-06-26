import React from 'react';

function Second() {
  return (
    <form>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name: </label>
        <input type="text" id="name" name="name" required />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email: </label>
        <input type="email" id="email" name="email" required />
      </div>

      <div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white' }}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Second;
