import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarFilterButton } from "@mui/x-data-grid"

const CustomToolbar = () => {
    return (
        <GridToolbarContainer>
          <GridToolbarFilterButton />
          <GridToolbarDensitySelector />
          <GridToolbarColumnsButton />
        </GridToolbarContainer>
      );
}

export default CustomToolbar;