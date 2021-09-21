import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  typography: {
    fontWeight: 600,
    marginTop: 5,
    marginBottom: 10,
  },

  formLabel: {
    color: '#3A3A3A',
    marginRight: 5,
    marginTop: 5,
    marginBottom: 10,
  },

  paper: {
    width : '100%',
    padding: theme.spacing(3),
    paddingRight: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  form: {
    width : '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    width:'100%',
    height: '',
    tabSize:'small',
  },

  fileInput: {
    float:'right',
    marginLeft: theme.spacing(1),
    width: '97%',
    margin: '10px 0',
  },
formControl: {
    width: '100%',
    margin: theme.spacing(1),
    minWidth: 50,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  buttonSubmit: {
    marginLeft: theme.spacing(1),
    width: '100%',
    marginBottom: 10,
  },
  buttonClear: {
    marginLeft: theme.spacing(1),
    width: '100%',
    marginBottom: 10,
  },
}));