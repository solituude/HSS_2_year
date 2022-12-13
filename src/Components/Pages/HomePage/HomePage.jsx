import React, { useEffect } from 'react'
import { Card } from '../../Card/Card'
import { Loader } from '../../UI/loader';
import { Paginator } from '../../UI/paginator';
import { connect } from 'react-redux'
import { changePage, requestData } from '../../../redux/main-reducer';

const HomePage = ({data, currentPage, info, requestData, changePage}) => {
  const {pages, prev, next} = info

  useEffect(() => {
    requestData(currentPage)
  }, [currentPage])

  return (
    <>
    <div className='after_header'>
          <p>The Rick and Morty</p>
          <img src="https://bipbap.ru/wp-content/uploads/2019/12/Rik-4.jpg"/>
    </div>
    <div className='container'>
      <div className='content'>
        {data ? <div className='wrapper'>
              {data.map(el => (
                  <Card data={el} key={el.id} />
              ))}
              <Paginator pages={pages} pressHandler={changePage} page={currentPage} next={next} prev={prev}/>
          </div> : <Loader/>}
      </div> 
    </div> 
    </>
    
  )
}

const mapStateToProps = (state) => ({
  data: state.main.data,
  info: state.main.info,
  currentPage: state.main.currentPage
})

export const HomePageContainer = connect(mapStateToProps, {requestData, changePage})(HomePage)