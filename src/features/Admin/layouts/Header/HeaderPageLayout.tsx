import { Container, Group, Text } from "@mantine/core";

interface IHeaderPageLayoutPropsType {
  title: string;
}

const HeaderPageLayout = ({ title }: IHeaderPageLayoutPropsType) => {
  return (
    <Container size={"xl"}>
      <Group
        bg={"white"}
        justify="space-between"
        className="rounded-xl border border-gray-200 px-5 py-4 font-poppins shadow-sm"
      >
        <Text className="font-poppins text-lg font-medium">{title}</Text>
      </Group>
    </Container>
  );
};

export default HeaderPageLayout;
