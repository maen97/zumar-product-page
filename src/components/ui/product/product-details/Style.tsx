import styled, {
    css,
    FlattenInterpolation,
    ThemeProps,
    DefaultTheme,
} from "styled-components/macro";

export const StyledProductDetails = styled.section<{
    custom?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .gutter-bottom {
        margin-bottom: ${({ theme }) => theme.spacing(6)};
    }

    @media ${({ theme }) => theme.breakpoints.md} {
        gap: 0 5px;
    }

    ${({ custom }) => custom}
`;

export const Title = styled.h1`
    font-size: 24px;
    margin-block: ${({ theme }) => theme.spacing(2)};
`;

export const Code = styled.p`
    color: #999cad;
    font-weight: 500;
`;

export const StyledDealsGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media ${({ theme }) => theme.breakpoints.sm} {
        grid-template-columns: 1fr;
    }
`;

export const Deal = styled.div``;

export const Label = styled.p`
    font-size: 12px;
    font-weight: 400;
`;

export const Price = styled.h4`
    font-size: 24px;
`;

export const StyledSegment = styled.section``;

export const SegmentTitle = styled.h4`
    display: flex;
    font-size: 20px;
    align-items: center;
    gap: 0 ${({ theme }) => theme.spacing(2)};
    margin-block: ${({ theme }) => theme.spacing(4)};
`;

export const SegmentSubtitle = styled.p<{ variant: "danger" | "success" }>`
    font-weight: ${({ variant }) => (variant == "danger" ? 500 : 600)};
    font-size: ${({ variant }) => (variant == "danger" ? "18px" : "24px")};
    color: ${({ theme, variant }) => theme.palette.common[variant]};
`;
export const SegmentBody = styled.div``;

export const Image = styled.div`
    width: 31px;
    height: 31px;
    overflow: hidden;
    border-radius: 50%;
    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const StyledIcon = styled.div`
    padding: 2px;
    display: flex;
    align-items: center;

    > img {
        width: 22px;
        height: 22px;
        object-fit: contain;
    }
`;

export const customOption = css`
    gap: 0 ${({ theme }) => theme.spacing(2)};
`;

export const customStorage = css`
    gap: 0 ${({ theme }) => theme.spacing(2)};

    > span {
        font-size: 32px;
        font-weight: 600;
    }
    > sub {
        font-size: 12px;
        font-weight: 400;
        align-self: flex-end;
        line-height: 36px;
    }
`;

export const customShipping = css`
    gap: 0 ${({ theme }) => theme.spacing(2)};
    align-items: center;
    > p {
        font-size: 18px;
        font-weight: 500;
        text-transform: capitalize;
    }

    @media ${({ theme }) => theme.breakpoints.md} {
        width: 100%;
    }
`;

export const customQuantity = css`
    gap: 0 ${({ theme }) => theme.spacing(2)};
    align-items: center;

    > span {
        font-size: 18px;
        font-weight: 500;
        color: #111;
    }
`;

export const customTotal = css`
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing(2)};
    align-items: center;

    .btn {
        display: flex;
        align-items: center;
        gap: 0 ${({ theme }) => theme.spacing(2)};
    }

    @media ${({ theme }) => theme.breakpoints.sm} {
        justify-content: center;

        .btn {
            flex: 0 0 100%;
            justify-content: center;
        }
    }
`;
