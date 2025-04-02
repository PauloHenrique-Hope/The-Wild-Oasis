import styled from "styled-components";

const LoginLayout = styled.main`
  min-height: 100vh;
  color: var(--color-brand-800);
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return <div>login</div>;
}

export default Login;
