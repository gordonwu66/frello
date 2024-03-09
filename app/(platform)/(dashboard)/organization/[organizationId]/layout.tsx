import { OrgControl } from "./_components/org-control";

// Invisible control component for implementating a useEffect
const OrganizationIdLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <>
        <OrgControl />
            {children}
        </>
    );
};

export default OrganizationIdLayout;