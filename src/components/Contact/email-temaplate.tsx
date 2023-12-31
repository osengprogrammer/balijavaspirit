import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";


interface EmailProps {
  emailAddress?: string;
  firstName?: string;
  messege?: string;
 
}

export const welcomeEmail = ({emailAddress, firstName,messege}:EmailProps) => {

  return (
    <Html>
      <Head />
      <Preview>BaliJava Spirit</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Text style={paragraph}>Email From = {emailAddress}</Text>

            <Hr style={hr} />
            <Text style={paragraph}>Nama = {firstName}</Text>

            <Text style={paragraph}>
              {messege}
            </Text>
            <Text style={paragraph}>— Balijava Spirit Team</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default welcomeEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
