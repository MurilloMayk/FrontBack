package com.progweb.back.pessoa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {

    @Autowired
    PessoaRepository pessoaRepository;

    public Pessoa save(Pessoa pessoa) {
        return pessoaRepository.save(pessoa);
    }

    public Pessoa update(Pessoa pessoa) {
        return null;
    }

    public boolean delete(long id) {
        return true;
    }

    public List<Pessoa> findAll() {
        return null;
    }

    public Pessoa findById(long id) {
        return null;
    }

    public List<Pessoa> findByNome(String nome) {
        return null;
    }

}
