
// Определяем типы пропсов для компонента
interface MyComponentProps {
  disabled?: boolean; // Используем для стилизации
  key: number | string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  ref?: React.Ref<HTMLDivElement>;
  title?: string;
}
type MyType = (() => void) | boolean | number | string | { foo: string } | null;

// Компонент с типизацией пропсов
const MyComponent: React.FC<MyComponentProps> = ({ key, ref, disabled, onClick, onChange, title }) => {
  // Логика для обработки disabled (например, изменение стилей)
  const divClass = disabled ? "disabled" : "";

  return (
    <div
      key={key}
      ref={ref}
      className={divClass} // Добавляем класс, если элемент disabled
      title={title}
      onChange={onChange}
      onClick={disabled ? undefined : onClick} // Делаем click неработающим, если disabled
    >
      {/* Ваш компонентный контент */}
    </div>
  );
};

// Пример использования компонента
const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    console.log("Clicked!");
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Changed:", event.target.value);
  };

  return (
    <MyComponent
      key={1}
      ref={ref}
      disabled={true} // Используем disabled для логики
      title="My Component"
      onChange={handleChange}
      onClick={handleClick}
    />
  );
};

export default App;
