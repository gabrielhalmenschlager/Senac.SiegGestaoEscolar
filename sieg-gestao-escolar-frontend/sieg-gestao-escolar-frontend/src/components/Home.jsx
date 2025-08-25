import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #152259;
  min-height: 100vh;
  background: linear-gradient(135deg, #F5F5F5 0%, #FFFFFF 100%);
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 0;
  margin-left: 320px;
  background: #F5F5F5;
`;

export const HeaderSection = styled.div`
  background: #808080;
  padding: 40px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 4px 20px rgba(21, 34, 89, 0.15);
`;

export const WelcomeSection = styled.div`
  flex: 1;
  margin: 0 40px;
`;

export const WelcomeTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 8px 0;
  letter-spacing: -0.02em;
`;

export const WelcomeSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-weight: 400;
`;

export const QuickActionsSection = styled.div`
  padding: 50px;
  background: #FFFFFF;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #152259;
  margin: 0 0 30px 0;
  text-align: center;
`;

export const QuickActions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const QuickActionCard = styled.div`
  background: #FFFFFF;
  border: 2px solid #F5F5F5;
  border-radius: 16px;
  padding: 30px;
  cursor: pointer;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(21, 34, 89, 0.1);
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export const ActionIcon = styled.div`
  color: #152259;
  margin-bottom: 20px;
`;

export const ActionLabel = styled.span`
  font-weight: 600;
  color: #152259;
  font-size: 1.1rem;
`;

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  padding: 50px;
  background: #F5F5F5;
`;

export const DashboardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StatsCard = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 30px rgba(21, 34, 89, 0.08);
  border: 1px solid rgba(21, 34, 89, 0.05);
`;

export const StatsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const StatsIcon = styled.div`
  background: linear-gradient(135deg, #152259, #1a2a6b);
  color: #FFFFFF;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatsContent = styled.div`
  flex: 1;
`;

export const StatsNumber = styled.h3`
  font-size: 3rem;
  font-weight: 600;
  color: #152259;
  margin: 0;
  line-height: 1;
`;

export const StatsLabel = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #AAAAAA;
  margin: 5px 0 0 0;
`;

export const StatsFooter = styled.div`
  padding-top: 20px;
  border-top: 1px solid #F5F5F5;
`;

export const GrowthIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #FFB400;
  font-weight: 600;
  font-size: 0.9rem;

  i {
    font-size: 14px;
  }
`;

export const ManagementCard = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  padding: 30px;
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(21, 34, 89, 0.08);
  border: 1px solid rgba(21, 34, 89, 0.05);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 4px;
    transform: scaleY(0);
    transition: transform 0.3s ease;
    transform-origin: top;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(21, 34, 89, 0.1);
  }

  &:hover::before {
    transform: scaleY(1);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export const CardIcon = styled.div`
  background: rgba(255, 180, 0, 0.1);
  color: #FFB400;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #152259;
  margin: 0;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #AAAAAA;
  line-height: 1.6;
  margin: 0 0 25px 0;
`;

export const CardFooter = styled.div`
  padding-top: 20px;
  border-top: 1px solid #F5F5F5;
`;

export const ViewAllLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #152259;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #FFB400;
  }
`;
