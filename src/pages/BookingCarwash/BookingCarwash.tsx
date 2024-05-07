import {
  Alert,
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import BookingLayout from "features/booking/components/BookingLayout";
import { IoAlertCircle } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
// import StepperMode from "features/booking/components/StepperMode";
import CustomSelectInput from "shared/components/Input/CustomSelectInput";
import CustomTextInput from "shared/components/Input/CustomTextInput";
import Navbar from "shared/components/Navbar/Navbar";
import { HeroImage, Porsche03, PorscheWash } from "shared/constant/Images";

const BookingCarwashPage = () => {
  return (
    <Container fluid mx={0} px={0} className="font-poppins">
      <Image
        src={HeroImage}
        className="absolute left-0 top-0 -z-20 h-[610px] w-screen "
      />

      <Container size={"xl"} px={0}>
        <Navbar />
      </Container>

      <Space h={50} />

      <Container size={"xl"} classNames={{ root: `px-0` }}>
        <BookingLayout thumbnail={PorscheWash} title="Carwash">
          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing={{ base: 30 }}
            className="w-full"
          >
            <Stack>
              <Grid
                gutter={30}
                className=" border  border-solid border-gray-200  bg-white px-7 py-7  shadow-md md:rounded-3xl md:px-10"
              >
                <Grid.Col span={{ base: 12 }}>
                  <Text className="text-xl font-medium">Lengkapi Data</Text>
                </Grid.Col>

                <Grid.Col span={{ base: 12 }}>
                  <Divider size={"sm"} />
                </Grid.Col>

                <Grid.Col span={{ base: 12 }}>
                  <CustomTextInput
                    label="Nama Lengkap"
                    placeholder="Masukkan Nama Lengkap"
                    withAsterisk
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <CustomTextInput
                    label="Tipe Mobil"
                    placeholder="Contoh : Avanza"
                    withAsterisk
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <CustomTextInput
                    label="Plat Nomor"
                    placeholder="Masukkan Plat Nomor"
                    withAsterisk
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12 }}>
                  <CustomTextInput
                    label="No. Telp / Whatsapp"
                    placeholder="Masukkan Nomor Telepon"
                    withAsterisk
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <CustomSelectInput
                    label="Hari"
                    data={[
                      "Senin",
                      "Selasa",
                      "Rabu",
                      "Kamis",
                      "Jumat",
                      "Sabtu",
                    ]}
                    placeholder="Pilih Hari"
                    withAsterisk
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <CustomSelectInput
                    label="Waktu / Jam"
                    data={[
                      "Senin",
                      "Selasa",
                      "Rabu",
                      "Kamis",
                      "Jumat",
                      "Sabtu",
                    ]}
                    placeholder="Pilih Waktu"
                    withAsterisk
                  />
                </Grid.Col>
              </Grid>

              <Stack
                gap={30}
                className="h-fit w-full border  border-solid border-gray-200  bg-white px-7 py-7  shadow-md md:rounded-3xl md:px-10"
              >
                <Text className="text-xl font-medium">Metode Pembayaran</Text>

                <Divider />

                <Stack gap={30}>
                  <CustomSelectInput
                    classNames={{
                      input: `bg-transparent placeholder:font-poppins  rounded-none border-t-transparent border-r-transparent  border-l-transparent border-b`,
                    }}
                    rightSection={<MdKeyboardArrowRight className="text-xl" />}
                    data={["Promo hari senin"]}
                    placeholder="Bayar hemat pakai promo"
                    label="Diskon"
                  />

                  <Stack gap={10}>
                    <Text>Pilih metode pembayaran</Text>
                    <Group>
                      <Checkbox
                        classNames={{
                          body: `bg-[#F2F2F2] rounded-full px-5  py-2.5`,
                          input: `rounded-full `,
                          root: `w-full md:w-fit`,
                        }}
                        defaultChecked
                        label="Cash"
                      />

                      <Checkbox
                        classNames={{
                          body: `bg-[#F2F2F2] rounded-full px-5  py-2.5`,
                          input: ` rounded-full `,
                          root: `w-full md:w-fit`,
                        }}
                        defaultChecked
                        label="Bayar di tempat"
                      />
                    </Group>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

            <>
              <Stack
                gap={30}
                className="h-fit w-full border  border-solid border-gray-200  bg-white px-5 py-7 shadow-md md:rounded-3xl md:px-10"
              >
                <Text className="text-xl font-medium">
                  Rincian Booking Carwash
                </Text>

                <Divider size={"sm"} />

                <Stack>
                  <Image
                    src={Porsche03}
                    className="m-auto w-full md:h-2/3 md:w-2/3 "
                  />
                  <Text className="text-center text-xs">
                    <span className="text-red-500">Note</span> : gambar tersebut
                    hanya pemanis
                  </Text>
                </Stack>

                <Stack gap={20}>
                  <Stack gap={10}>
                    <Group justify="space-between">
                      <Text>Harga</Text>
                      <Text>Rp 60.000</Text>
                    </Group>

                    <Group justify="space-between">
                      <Text>Potongan Promo</Text>
                      <Text className="text-red-500">- 6000</Text>
                    </Group>
                  </Stack>

                  <Divider variant="dashed" size={"sm"} />

                  <Group justify="space-between" className="text-green-600 ">
                    <Text className="font-medium">Total Pembayaran</Text>
                    <Text className="font-medium">Rp 56.000</Text>
                  </Group>

                  <Alert
                    variant="light"
                    color="yellow"
                    title="Kebijakan Pembatalan"
                    icon={<IoAlertCircle />}
                    radius={"lg"}
                    classNames={{
                      message: `text-xs  md:text-sm`,
                    }}
                  >
                    Kamu tidak dapat melakukan pembatalan atau perubahan apapun
                    pada pesanan setelah melakukan pembayaran
                  </Alert>
                </Stack>
                <Button
                  fullWidth
                  className=" h-12 rounded-xl bg-primary px-7 text-base font-medium drop-shadow-2xl"
                >
                  Lanjutkan
                </Button>
              </Stack>
            </>
          </SimpleGrid>
        </BookingLayout>
      </Container>

      <Space h={50} />
    </Container>
  );
};

export default BookingCarwashPage;
