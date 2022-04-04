import {
  useIsAccountRole,
  useWeb3,
  isContractWithRoles,
} from "@3rdweb-sdk/react";

export const MinterOnl = ({
  children,
  contract,
}) => {
  const { address } = useWeb3();

  const isMinter = useIsAccountRole(
    "minter",
    isContractWithRoles(contract) ? contract : undefined,
    address,
  );
  if (!isMinter) {
    return null;
  }
  return <>{children}</>;
};
