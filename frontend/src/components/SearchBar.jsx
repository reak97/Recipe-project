
export default function App() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <input 
                type="text" 
                placeholder="Buscar..." 
                style={{ padding: '10px', marginRight: '10px', flex: 1 }}
            />
            <button style={{ padding: '10px' }}>Buscar</button>
        </div>
    );
  }
