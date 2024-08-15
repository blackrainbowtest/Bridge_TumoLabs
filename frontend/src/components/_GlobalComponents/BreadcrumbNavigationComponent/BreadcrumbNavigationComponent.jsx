import { memo } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

function BreadcrumbNavigationComponent() {
  const location = useLocation();

  // Разделяем текущий путь на части
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label='breadcrumb' sx={{ marginBottom: 2 }}>
      {/* Ссылка на главную страницу */}
      <Link component={RouterLink} to='/' color='inherit'>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <HomeIcon sx={{ mr: 0.5 }} fontSize='small' />
          Home
        </Box>
      </Link>

      {/* Генерация ссылок для всех частей пути */}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        // Если это последняя часть пути, то отображаем её как текст
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={to} color='textPrimary'>
            {value}
          </Typography>
        ) : (
          <Link key={to} component={RouterLink} to={to} color='inherit'>
            {value}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

export default memo(BreadcrumbNavigationComponent);
