import { FC } from "react";
import { ArrowRightIcon } from "../../../components/icons/ArrowRightIcon";
import { Breadcrumbs } from "../../../components/ui/Breadcrumbs";
import { Link } from "../../../components/ui/Link";
import { Typography } from "../../../components/ui/Typography";
import { Container } from "../../ui/Container";
import { styles } from "./styles";

interface BreadcrumbsSectionProps {
  breadcrumbs: {
    title: string;
    link: string;
    id: string | number;
  }[];
}

export const BreadcrumbsSection: FC<BreadcrumbsSectionProps> = ({
  breadcrumbs,
}) => (
  <Container sx={styles.root}>
    <Breadcrumbs
      separator={<ArrowRightIcon sx={styles.breadcrumbsSeparator} />}
      sx={styles.breadcrumbs}
    >
      {breadcrumbs.map((crumb, index) => {
        if (index === breadcrumbs.length - 1) {
          return (
            <Typography
              key={crumb.id}
              variant="textInfo"
              color="greyPalette.500"
            >
              {crumb.title}
            </Typography>
          );
        }
        return (
          <Link key={crumb.id} href={crumb.link}>
            <Typography variant="textInfo" color="greyPalette.500">
              {crumb.title}
            </Typography>
          </Link>
        );
      })}
    </Breadcrumbs>
  </Container>
);
