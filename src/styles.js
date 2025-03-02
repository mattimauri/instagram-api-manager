import styled from 'styled-components';

// Palette di colori di Instagram
const colors = {
  instagramBlue: '#405DE6',
  instagramPurple: '#5851DB',
  instagramPink: '#C13584',
  instagramRed: '#E1306C',
  instagramOrange: '#FD1D1D',
  instagramYellow: '#F56040',
  background: '#FAFAFA',
  white: '#FFFFFF',
  black: '#262626',
  lightGrey: '#EFEFEF',
  grey: '#8E8E8E',
  darkGrey: '#262626',
  error: '#ED4956',
  success: '#2ECC71'
};

// App Container
export const AppContainer = styled.div`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: ${colors.background};
  min-height: 100vh;
`;

export const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 20px;
`;

export const AppTitle = styled.h1`
  color: ${colors.darkGrey};
  font-size: 28px;
  margin-bottom: 30px;
`;

// Login Styles
export const LoginContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  color: ${colors.darkGrey};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid ${colors.lightGrey};
`;

export const LoginTitle = styled.h2`
  color: ${colors.darkGrey};
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 14px;
  color: ${colors.darkGrey};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${colors.lightGrey};
  border-radius: 4px;
  font-size: 14px;
  background-color: ${colors.background};
  
  &:focus {
    border-color: ${colors.instagramBlue};
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${colors.lightGrey};
  border-radius: 4px;
  font-size: 14px;
  background-color: ${colors.background};
  resize: vertical;
  min-height: 80px;
  
  &:focus {
    border-color: ${colors.instagramBlue};
    outline: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${colors.lightGrey};
  border-radius: 4px;
  font-size: 14px;
  background-color: ${colors.background};
  cursor: pointer;
  
  &:focus {
    border-color: ${colors.instagramBlue};
    outline: none;
  }
`;

export const Button = styled.button`
  background: linear-gradient(45deg, ${colors.instagramBlue}, ${colors.instagramPurple}, ${colors.instagramPink}, ${colors.instagramRed});
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: ${colors.grey};
    cursor: not-allowed;
    transform: none;
  }
`;

export const LogoutButton = styled.button`
  background-color: ${colors.error};
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #c62828;
  }
`;

export const ErrorMessage = styled.div`
  background-color: #ffebee;
  color: ${colors.error};
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 4px;
  font-size: 14px;
`;

export const Hint = styled.p`
  font-size: 12px;
  color: ${colors.grey};
  margin-top: 5px;
  margin-bottom: 0;
`;

export const StatusMessage = styled.p`
  margin-top: 20px;
  padding: 12px;
  border-radius: 4px;
  font-weight: 500;
  background-color: #e8f5e9;
  color: ${colors.success};
`;

export const LoginInfo = styled.div`
  margin-top: 20px;
  font-size: 13px;
  color: ${colors.grey};
  text-align: center;
`;

// Dashboard Styles
export const DashboardContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  color: ${colors.darkGrey};
  min-height: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid ${colors.lightGrey};
`;

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: linear-gradient(to right, ${colors.instagramBlue}, ${colors.instagramPurple});
  border-radius: 8px 8px 0 0;
  color: white;
`;

export const UserInfo = styled.div`
  font-weight: 600;
`;

export const Username = styled.span`
  font-size: 16px;
`;

export const DropdownContainer = styled.div`
  flex-grow: 1;
  margin: 0 20px;
`;

export const DashboardContent = styled.div`
  padding: 20px;
  flex-grow: 1;
`;

export const DashboardWelcome = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

export const ActionContainer = styled.div`
  background-color: ${colors.background};
  border-radius: 8px;
  padding: 25px;
  margin-top: 10px;
  border: 1px solid ${colors.lightGrey};
`;

export const ActionTitle = styled.h2`
  color: ${colors.darkGrey};
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
`;