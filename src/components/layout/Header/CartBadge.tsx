import { IconButton, styled } from "@mui/material";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { BasketIcon } from "@/components/icons";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const CartBadge = () => {
  return (
    // <IconButton aria-label="cart">
    <StyledBadge badgeContent={4} color="primary">
      <BasketIcon />
    </StyledBadge>
    // </IconButton>
  );
};
