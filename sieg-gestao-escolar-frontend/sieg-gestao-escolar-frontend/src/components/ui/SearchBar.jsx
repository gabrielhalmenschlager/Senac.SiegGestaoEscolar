export default function SearchBar({ placeholder = "Pesquisar...", value, onChange, style }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: '8px 12px',
        borderRadius: '8px',
        border: '2px solid #152259',      
        backgroundColor: '#F5F5F5',     
        color: '#152259',               
        fontWeight: '500',
        outline: 'none',
        transition: 'all 0.3s ease',
        ...style
      }}
      onFocus={e => e.target.style.borderColor = '#FFB400'}
      onBlur={e => e.target.style.borderColor = '#152259'}   
    />
  );
}