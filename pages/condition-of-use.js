import Container from "@mui/material/Container";
import Head from "next/head";
import Typography from "@mui/material/Typography";

export default function ConditionOfUse() {
  return (
    <>
      <Head>
        <title>Optimus Battery- Condition of use</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />
      </Head>

      <main>
        <Container sx={{ marginBlock: { xs: "75px", md: "100px" } }} fixed>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: "700" }}
            gutterBottom
          >
            Guarantee conditions for Optimus Battery
          </Typography>

          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "700", mb: 5 }}
          >
            Guarantee period: 24* Months
          </Typography>

          <Typography variant="body1" gutterBottom>
            Optimus Battery provides a guarantee for the IPS, UPS, and Inverter
            batteries sold to the customers. The guarantee is subject to the
            following conditions:
          </Typography>

          <ol>
            <li>
              <b>Guarantee Period:</b> The guarantee period for the
              IPS/UPS/Inverter batteries is 24 months, starting from the date of
              purchase as indicated on the original purchase receipt.
            </li>
            <li>
              <b>Coverage:</b> This guarantee covers any manufacturing defects
              and workmanship issues that may arise during normal use of the
              IPS/UPS/Inverter battery.
            </li>
            <li>
              <b>Exclusions:</b> The guarantee does not cover damages or
              failures resulting from:
              <ol type="a">
                <li>Incorrect installation or improper use of the battery</li>
                <li>
                  It is a condition of this guarantee that the battery is
                  returned unopened and complete with electrolyte
                </li>
                <li>Short circuit of the positive and negative post</li>
                <li>
                  Failure of Battery due to over discharge, over charge or
                  improper topping up
                </li>
                <li>
                  Using water other than De-Mineralized (DM) water in the
                  battery
                </li>
                <li>Dry battery plates due to low electrolyte level</li>
                <li>
                  Accidents, mishandling, negligence, abuse, or misuse of the
                  battery
                </li>
                <li>
                  Usage of incompatible or non-approved accessories or equipment
                  with the battery
                </li>
                <li>
                  The right to determine whether a battery needs repair or total
                  replacement lies with the company
                </li>
              </ol>
            </li>
            <li>
              <b>Claim Process:</b> In the event of a guarantee claim, the
              customer must contact Optimus Battery customer support or seller
              or delear through the designated channels. The customer will be
              required to present the original purchase receipt along with the
              product for inspection.
            </li>
            <li>
              <b>Inspection and Replacement:</b> Upon receiving a guarantee
              claim, Optimus Battery or its authorized representative will
              inspect the battery to determine if the issue is covered. If the
              battery is found to be defective due to manufacturing faults or
              workmanship issues within the guarantee period, it will be
              repaired or replaced at the discretion of the company.
            </li>
            <li>
              <b>Repair or Replacement:</b> If the battery is repairable,
              Optimus Battery will repair the battery to restore it to its
              proper working condition. If the battery is irreparable, the
              company will provide a replacement battery of equal or similar
              specifications.
            </li>
            <li>
              <b>Transportation:</b> Any costs associated with transporting the
              defective battery to Optimus Battery's designated service center
              shall be borne by the customer.
            </li>
            <li>
              <b>Voiding of guarantee:</b> Opening the battery casing or
              tampering with the internal components by anyone other than an
              authorized service provider will void the guarantee.
            </li>
            <li>
              <b>Limited Liability:</b> Optimus Battery shall not be liable for
              any consequential or incidental damages arising from the use or
              inability to use the IPS/UPS/Inverter battery.
            </li>
            <li>
              <b>Limited Liability:</b> Optimus Battery shall not be liable for
              any consequential or incidental damages arising from the use or
              inability to use the IPS/UPS/Inverter battery.
            </li>
          </ol>

          <Typography variant="body1" gutterBottom>
            By using the battery, the customer agrees to be bound by these
            guarantee conditions. For further information or questions regarding
            the guarantee, please refer to the documentation provided with the
            product or contact Optimus Battery Ltd. or selles center.
          </Typography>
        </Container>
      </main>
    </>
  );
}
