export const GetAllCompaniesAction = (userId:any) => {
  return(async (dispatch) =>{
    const companies = await [{name: "Muldjord R' us", color: 'red' }, {name: "Al quaeda", color: 'orange'}, {name: 'the techno union of mars', color: 'blue'}]

    dispatch({
      type: 'AllCompanies',
      payload: await companies
    })
  })
}