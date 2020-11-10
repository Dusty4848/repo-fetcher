export type RepoFinderFormValues = {
  username: string;
};

export type RepoFinderFormProps = {
  loading: boolean;
  initialValues?: RepoFinderFormValues;
  handleSubmit: (arg1: RepoFinderFormValues) => void;
  handleClear: () => void;
};
